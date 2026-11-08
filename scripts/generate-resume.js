const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const { width, height } = page.getSize();
  let y = height - 50;

  // Header Banner Background
  page.drawRectangle({
    x: 0,
    y: height - 110,
    width: width,
    height: 110,
    color: rgb(0.02, 0.04, 0.09), // Dark luxury obsidian
  });

  // Name
  page.drawText('SYED UMAIR SHAH', {
    x: 40,
    y: height - 45,
    size: 20,
    font: fontBold,
    color: rgb(0.0, 0.95, 1.0), // Electric Cyan
  });

  // Headline
  page.drawText('IT Support Specialist | Software Developer | Aviation Operations Professional', {
    x: 40,
    y: height - 65,
    size: 10,
    font: fontRegular,
    color: rgb(0.9, 0.9, 0.9),
  });

  // Contact Strip
  page.drawText('Location: Islamabad, Pakistan  |  Phone: +92 313 9837430  |  Email: syedumairshah763@gmail.com', {
    x: 40,
    y: height - 85,
    size: 9,
    font: fontRegular,
    color: rgb(0.65, 0.75, 0.85),
  });

  y = height - 135;

  const drawSectionHeading = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 40,
      y: y,
      size: 11,
      font: fontBold,
      color: rgb(0.05, 0.45, 0.85),
    });
    page.drawLine({
      start: { x: 40, y: y - 4 },
      end: { x: width - 40, y: y - 4 },
      thickness: 1,
      color: rgb(0.85, 0.88, 0.92),
    });
    y -= 20;
  };

  // Executive Summary
  drawSectionHeading('Executive Summary');
  const summaryLines = [
    'Technology and customer service professional with proven experience spanning enterprise IT support,',
    'software development, technical troubleshooting, and international aviation operations at major travel hubs.',
    'Skilled in bridging complex technical systems with high-touch, empathetic service delivery.',
  ];
  for (const line of summaryLines) {
    page.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2) });
    y -= 13;
  }
  y -= 8;

  // Technical & Operational Skills
  drawSectionHeading('Core Technical & Operational Competencies');
  const skillLines = [
    '• Software & Web Dev: HTML5, CSS3, JavaScript, React.js, Next.js, C++, SQL, REST APIs, Git',
    '• Systems & IT Infrastructure: Windows Support, Linux, Active Directory, Microsoft 365, TCP/IP, Hardware/Software Triage',
    '• Aviation & CX: Airport Operations, Departure Control Systems (DCS), Boarding Logistics, VIP Al Majlis Care, De-escalation',
  ];
  for (const line of skillLines) {
    page.drawText(line, { x: 40, y, size: 9, font: fontRegular, color: rgb(0.15, 0.15, 0.15) });
    y -= 13;
  }
  y -= 8;

  // Professional Experience
  drawSectionHeading('Professional Experience');

  const experiences = [
    {
      role: 'Guest Service Agent',
      company: 'Etihad Airways',
      period: '2023 – Present',
      bullets: [
        'Orchestrated end-to-end passenger check-in procedures using Departure Control Systems (DCS).',
        'Led precise gate boarding operations under strict turnaround timeframes, ensuring manifest accuracy.',
        'Managed critical Transfer Desks, re-booking disrupted passengers with calm authority and empathy.',
      ],
    },
    {
      role: 'Customer Service Agent',
      company: 'Dubai International Airport (DXB)',
      period: '2022 – 2023',
      bullets: [
        'Assisted thousands of international travelers daily with terminal logistics and flight connections.',
        'Supported prestigious Al Majlis VIP services catering to diplomats and high-net-worth delegates.',
        'Coordinated seamlessly with airport police, immigration, and customs authorities.',
      ],
    },
    {
      role: 'IT Support & Software Development',
      company: 'Buraq Technologies',
      period: '2020 – 2022',
      bullets: [
        'Provided responsive Tier 1/2 technical support across Windows, Linux, and network appliances.',
        'Engineered internal software and web modules using modern frameworks, C++, and SQL.',
        'Administered Active Directory domains: user provisioning, security policies, and GPO management.',
      ],
    },
  ];

  for (const exp of experiences) {
    page.drawText(`${exp.role} — ${exp.company}`, {
      x: 40,
      y,
      size: 10,
      font: fontBold,
      color: rgb(0.1, 0.1, 0.1),
    });
    page.drawText(exp.period, {
      x: width - 180,
      y,
      size: 8.5,
      font: fontOblique,
      color: rgb(0.4, 0.4, 0.4),
    });
    y -= 13;

    for (const b of exp.bullets) {
      page.drawText(`•  ${b}`, {
        x: 50,
        y,
        size: 8.5,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.25),
      });
      y -= 12;
    }
    y -= 6;
  }

  y -= 4;

  // Education & Certifications
  drawSectionHeading('Education & Professional Credentials');
  page.drawText('Bachelor of Science in Information Technology (BS IT)', {
    x: 40,
    y,
    size: 9.5,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  page.drawText('Higher Education Commission (HEC) Accredited University  (2016 – 2020)', {
    x: 40,
    y: y - 12,
    size: 8.5,
    font: fontRegular,
    color: rgb(0.35, 0.35, 0.35),
  });
  y -= 26;

  const certs = [
    '• Software Development: React.js, JavaScript (ES6+), TypeScript & Next.js',
    '• Microsoft 365 Certified: Fundamentals (MS-900)',
    '• IATA Airline Passenger Services & DCS Operational Standards',
  ];
  for (const c of certs) {
    page.drawText(c, { x: 40, y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25) });
    y -= 12;
  }

  // Footer notice
  page.drawText('Verified Profile Document • Generated for Syed Umair Shah • Accessible via syedumairshah.dev', {
    x: 40,
    y: 25,
    size: 7.5,
    font: fontOblique,
    color: rgb(0.5, 0.5, 0.5),
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfBytes);
  console.log('Successfully generated public/resume.pdf');
}

createResume().catch(console.error);

