const http = require('http');

function request(options, data) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: body,
        });
      });
    });
    req.on('error', reject);
    if (data) {
      req.write(data);
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING PORTFOLIO VERIFICATION SUITE ---');

  // 1. Test Homepage
  try {
    const home = await request({
      hostname: '127.0.0.1',
      port: 3000,
      path: '/',
      method: 'GET',
    });
    console.log(`[TEST 1] GET / -> HTTP ${home.statusCode}`);
    if (home.body.includes('Syed') && home.body.includes('Umair Shah')) {
      console.log('✓ Candidate name "Syed Umair Shah" verified in DOM.');
    } else {
      console.error('✗ Candidate name missing in DOM!');
    }
    if (home.body.includes('Etihad Airways') && home.body.includes('Dubai International Airport')) {
      console.log('✓ Aviation experience (Etihad, DXB) verified in DOM.');
    } else {
      console.error('✗ Aviation experience missing in DOM!');
    }
  } catch (err) {
    console.error('[TEST 1 FAILED]', err.message);
  }

  // 2. Test Resume Download
  try {
    const resume = await request({
      hostname: '127.0.0.1',
      port: 3000,
      path: '/resume.pdf',
      method: 'GET',
    });
    console.log(`[TEST 2] GET /resume.pdf -> HTTP ${resume.statusCode}, Content-Type: ${resume.headers['content-type']}, Length: ${resume.body.length}`);
    if (resume.statusCode === 200 && resume.body.startsWith('%PDF')) {
      console.log('✓ PDF resume file verified and downloadable.');
    } else {
      console.error('✗ PDF resume check failed!');
    }
  } catch (err) {
    console.error('[TEST 2 FAILED]', err.message);
  }

  // 3. Test Contact API with Valid Payload
  try {
    const payload = JSON.stringify({
      name: 'Dr. Arthur Pendelton',
      email: 'a.pendelton@globalaviation.com',
      subject: 'Senior Technical Support / Aviation Systems Lead Role',
      message: 'We are impressed by your dual background in Etihad Airways and enterprise software development. We would like to schedule an interview.',
    });
    const contactRes = await request(
      {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/api/contact',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      payload
    );
    console.log(`[TEST 3] POST /api/contact -> HTTP ${contactRes.statusCode}`);
    const json = JSON.parse(contactRes.body);
    console.log('Contact API response:', json);
    if (json.success && json.submissionId) {
      console.log('✓ Contact form transmission and server-side receipt ID verified.');
    } else {
      console.error('✗ Contact form submission failed!');
    }
  } catch (err) {
    console.error('[TEST 3 FAILED]', err.message);
  }

  // 4. Test Contact API Spam Honeypot Rejection
  try {
    const spamPayload = JSON.stringify({
      name: 'Spam Bot',
      email: 'bot@spam.com',
      subject: 'Buy Crypto',
      message: 'Fast rich now!',
      honeypot: 'i-am-a-bot',
    });
    const spamRes = await request(
      {
        hostname: '127.0.0.1',
        port: 3000,
        path: '/api/contact',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(spamPayload),
        },
      },
      spamPayload
    );
    console.log(`[TEST 4] POST /api/contact (honeypot spam) -> HTTP ${spamRes.statusCode}`);
    if (spamRes.statusCode === 400) {
      console.log('✓ Honeypot spam properly rejected with HTTP 400.');
    } else {
      console.error('✗ Honeypot spam test failed!');
    }
  } catch (err) {
    console.error('[TEST 4 FAILED]', err.message);
  }

  // 5. Test Robots.txt & Sitemap.xml
  try {
    const robots = await request({ hostname: '127.0.0.1', port: 3000, path: '/robots.txt', method: 'GET' });
    console.log(`[TEST 5] GET /robots.txt -> HTTP ${robots.statusCode}`);
    const sitemap = await request({ hostname: '127.0.0.1', port: 3000, path: '/sitemap.xml', method: 'GET' });
    console.log(`[TEST 5] GET /sitemap.xml -> HTTP ${sitemap.statusCode}`);
    if (robots.statusCode === 200 && sitemap.statusCode === 200) {
      console.log('✓ SEO robots.txt and sitemap.xml verified.');
    }
  } catch (err) {
    console.error('[TEST 5 FAILED]', err.message);
  }

  console.log('--- ALL AUTOMATED VERIFICATION TESTS COMPLETED ---');
}

runTests().catch(console.error);

