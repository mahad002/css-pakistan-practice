# Information Technology

Syllabus lines covered:
- Computer (Hardware & Software Fundamentals); I/O Processing and data storage, Networking & Internet Standards, Application and business Software, Social Media Websites. Information Systems. Fundamentals of artificial intelligence.
- Telecommunications: Basics of Wireless Communication (Mobile, Satellite, Surveillance and GPS and Fiber Optic etc.)

You know this material. The risk is writing like an engineer. The examiner is a general-science marker: give a definition, a labelled diagram, a table, and simple examples. About three 5-mark parts a year come from this section.

---

## §1 The computer: basics and block diagram (asked 2017)

**Definition.** A computer is an electronic machine that accepts data (input), processes it by following stored instructions (a program), stores it, and gives results (output).

**Features:** speed, accuracy, large storage, no tiredness (diligence), versatility, automation.

**Block diagram**

```
                  +---------------------------------------------+
                  |        CENTRAL PROCESSING UNIT (CPU)        |
                  |  +--------------+     +-------------------+ |
 INPUT UNIT ----->|  | Control Unit |<--->| Arithmetic & Logic| |-----> OUTPUT UNIT
 (keyboard,       |  |    (CU)      |     |    Unit (ALU)     | |  (monitor, printer)
  mouse)          |  +--------------+     +-------------------+ |
                  |          ^   registers                      |
                  +----------|----------------------------------+
                             v
                  +----------------------------+
                  |   MAIN MEMORY (RAM, ROM)   |
                  +----------------------------+
                             ^
                             v
                  +----------------------------+
                  | SECONDARY STORAGE (HDD/SSD)|
                  +----------------------------+
```

| Unit | Function |
|---|---|
| Input unit | Takes data and instructions and turns them into binary form |
| **Control unit (CU)** | Directs and coordinates all parts; fetches and decodes instructions; sends control signals (MCQ 2026) |
| **Arithmetic and logic unit (ALU)** | Does calculations (+, −, ×, ÷) and comparisons (AND, OR, NOT, greater than) |
| Registers | Tiny, very fast stores inside the CPU |
| Main memory | Holds programs and data in use |
| Secondary storage | Keeps data permanently |
| Output unit | Presents results in a form people can use |

**Instruction cycle:** fetch → decode → execute → store. This stored-program design is the von Neumann architecture.

**Generations of computers**

| Generation | Period | Technology |
|---|---|---|
| First | 1940s–1950s | Vacuum tubes (ENIAC) |
| Second | Late 1950s–early 1960s | Transistors |
| Third | 1960s | Integrated circuits |
| Fourth | 1971 onwards | Microprocessors (Intel 4004) |
| Fifth | Present and future | Artificial intelligence |

---

## §2 Hardware

**Hardware** is the physical part of a computer: anything you can touch.

| Group | Examples |
|---|---|
| Input devices | Keyboard, mouse, scanner, microphone, webcam, touch screen, barcode reader |
| Output devices | Monitor, printer, speakers, projector, plotter |
| Processing | CPU (processor), graphics processor (GPU), motherboard |
| Storage | Hard disk, SSD, USB drive, optical disc |
| Communication | Network card, modem, router |

**Buses (asked 2017).** A bus is a set of wires that carries signals between parts of the computer.

| Bus | Carries | Direction | Note |
|---|---|---|---|
| Data bus | The data itself | Both ways | Its width (8, 16, 32, 64 bits) sets how much data moves at once |
| Address bus | The memory address the CPU wants | One way (from CPU) | Its width sets the largest memory: 32 lines can address 4 GB |
| Control bus | Control and timing signals (read, write, interrupt, clock) | Both ways | Coordinates the other two |

---

## §3 Software and types of computers (asked 2017, 2023, 2024)

**Software** is the set of programs that tells the hardware what to do. You cannot touch it.

| Type | Purpose | Examples |
|---|---|---|
| **System software** | Runs the computer and supports other programs | Operating systems (Windows, Linux, macOS, Android), device drivers, utilities (antivirus, backup), compilers and interpreters |
| **Application software** | Does tasks for the user | Word processor, spreadsheet, browser, media player, games, accounting package |

**Operating system functions:** manages the processor, memory, files and devices; provides the user interface; controls security.

**Hardware vs software (asked 2024)**

| Point | Hardware | Software |
|---|---|---|
| Nature | Physical, tangible | Logical, intangible |
| Made by | Manufacturing | Programming |
| Wear | Wears out over time | Does not wear out; can have bugs |
| Affected by viruses | No | Yes |
| Dependence | Useless without software | Cannot run without hardware |
| Replacement | Replaced when damaged | Reinstalled or updated |
| Five examples | Keyboard, monitor, CPU, hard disk, printer | Windows, MS Word, Excel, Chrome, Photoshop |

**Program vs software vs application (asked 2023)**

| Term | Meaning | Example |
|---|---|---|
| Program | A set of instructions written to do one specific task | A script that adds two numbers |
| Software | A broad term: one or more programs plus their data and documentation. Includes system and application software. | Windows; MS Office |
| Application ("app") | Software made for end users to do particular jobs. Every application is software, but not all software is an application. | WhatsApp, Excel |

**Programming languages:** machine language (binary) → assembly language → high-level languages (C, Java, Python). A compiler translates the whole program at once; an interpreter translates line by line.

**Types of computers (asked 2017)**

| By size and power | Features | Use |
|---|---|---|
| Supercomputer | Fastest and costliest; thousands of processors | Weather forecasts, climate models, nuclear research, AI training |
| Mainframe | Very large; serves hundreds of users at once | Banks, airlines, NADRA-type databases |
| Minicomputer (mid-range server) | Medium size; tens of users | Departments, small firms |
| Microcomputer | Single user; one microprocessor | Desktop, laptop, tablet, smartphone |

By data handled: analog (continuous signals; speedometer), digital (binary), hybrid (both; hospital monitors). By purpose: general-purpose and special-purpose (ATM, washing-machine controller).

---

## §4 Input/output processing

**Data** are raw facts. **Information** is processed data that has meaning.

```
 INPUT ---> PROCESSING ---> OUTPUT
              ^   |
              |   v
             STORAGE
```
This is the input–process–output (IPO) cycle.

| Processing mode | Meaning | Example |
|---|---|---|
| Batch | Data collected and processed together later | Monthly payroll, electricity bills |
| Online / interactive | Processed as entered | ATM withdrawal |
| Real-time | Processed instantly within a strict time limit | Air-traffic control, missile guidance |

**How the CPU deals with devices:** each device has a controller and a driver. The CPU can keep checking a device (polling), or the device can signal the CPU when ready (interrupt), or data can move straight between device and memory (direct memory access). Slow devices use a buffer; print jobs wait in a queue (spooling).

**Units of data**

| Unit | Size |
|---|---|
| Bit | 0 or 1 |
| Byte | 8 bits |
| Kilobyte (KB) | 1,024 bytes |
| Megabyte (MB) | 1,024 KB |
| Gigabyte (GB) | 1,024 MB |
| Terabyte (TB) | 1,024 GB |
| Then | Petabyte, exabyte, zettabyte, yottabyte |

Computers use the binary system (base 2). Characters are coded in ASCII or Unicode.

---

## §5 Data storage and memory (asked 2017, 2018, 2021)

**Computer memory** is the part that holds data and instructions, for the moment or for good.

```
        fastest, smallest, costliest
          /  Registers  \
         /     Cache      \
        /   Main memory    \        primary (inside)
       /  SSD / Hard disk    \      secondary (permanent)
      /  Optical, tape, cloud  \
        slowest, largest, cheapest
```

| Point | Primary memory | Secondary memory |
|---|---|---|
| Other names | Main, internal | Auxiliary, external, storage |
| Speed | Very fast | Slower |
| Volatile | RAM is; ROM is not | Not volatile |
| Capacity | Smaller | Much larger |
| Cost per GB | High | Low |
| Examples | RAM, ROM, cache | Hard disk, SSD, USB drive, CD/DVD, memory card |

**RAM vs ROM (asked 2017)**

| Point | RAM (random access memory) | ROM (read-only memory) |
|---|---|---|
| Data | Lost when power goes off (volatile) | Stays without power (non-volatile) |
| Operations | Read and write | Normally read only |
| Holds | Programs and data now in use | Start-up instructions (BIOS, firmware) |
| Speed | Faster | Slower |
| Size | Large (4–64 GB) | Small (a few MB) |
| Types | SRAM, DRAM | PROM, EPROM, EEPROM (flash) |

**Types of secondary storage**

| Type | How data is held | Examples |
|---|---|---|
| Magnetic | Tiny magnetised spots | Hard disk, magnetic tape |
| Optical | Pits and flat areas read by a laser | CD (700 MB), DVD (4.7 GB), Blu-ray (25 GB) |
| Solid state (flash) | Electric charge trapped in memory cells; no moving parts | SSD, USB drive, SD card |
| Cloud | On remote servers reached through the internet | Google Drive, OneDrive |

**How a hard disk stores data (asked 2018)**
1. The disk has one or more rigid **platters** coated with magnetic material. They spin at 5,400–7,200 revolutions a minute.
2. A **read/write head** on a moving arm floats just above each surface.
3. **Writing:** current in the head makes a magnetic field that sets the direction of tiny regions on the platter. One direction means 1, the other 0.
4. **Reading:** as the platter passes, the head senses the magnetic directions and turns them back into electrical pulses.
5. The surface is divided into circular **tracks**, and each track into **sectors**. The file system keeps a table of which sectors hold each file.
6. The data stays when power is off.

**Diagram:** a round platter with rings (tracks) and wedge lines (sectors); a spindle at the centre; an arm from the corner ending in a head over the platter.

SSDs are faster, silent and shock-proof but cost more per gigabyte.

---

## §6 Networking (asked 2019, 2023)

**Computer network.** Two or more computers and devices linked to share data, programs, hardware (printers) and internet access.

**Types by area covered (asked 2019)**

| Type | Area | Example | Note |
|---|---|---|---|
| PAN (personal) | A few metres | Phone to earbuds by Bluetooth | One person's devices |
| LAN (local) | Room, building, campus | Office or university network; Wi-Fi | Fast; privately owned |
| MAN (metropolitan) | A city | Cable TV network; city-wide bank network | Joins several LANs |
| WAN (wide) | Country, continent, world | The internet; a bank's national network | Uses leased lines, fibre, satellites |

**Topologies (layouts):** bus (one shared cable), star (all to a central switch; the most common), ring, mesh (every node linked; most reliable), tree, hybrid.

```
 STAR:      PC   PC            BUS:  PC   PC   PC          RING:  PC -- PC
              \ /                     |    |    |                 |      |
        PC -- SWITCH -- PC        ====================            PC -- PC
```

**Devices:** network card, switch (joins devices in a LAN), router (joins networks and chooses paths), modem (converts signals for the line), access point (Wi-Fi), firewall (security).
**Media:** twisted-pair copper, coaxial cable, optical fibre; radio (Wi-Fi), microwave, satellite.
**Models:** client–server (central server gives services) and peer-to-peer (all equal).

**Network vs internet (asked 2023)**

| Point | Network | Internet |
|---|---|---|
| Meaning | Any group of linked computers | The worldwide network of networks |
| Size | Small to large | Global |
| Ownership | One person or organisation | No single owner |
| Access | Usually private | Public |
| Rules | Any suitable protocol | TCP/IP |
| Example | A college LAN | The internet itself |

An **intranet** is a private network that uses internet technology inside one organisation.

---

## §7 Internet standards (asked 2020)

**Internet:** a global system of interconnected networks that use the TCP/IP protocols. It grew from ARPANET (1969). The **World Wide Web** (Tim Berners-Lee, 1989–91) is one service that runs on the internet; e-mail is another.

A **protocol** is an agreed set of rules for communication. **Standards** let equipment from different makers work together.

### OSI model (Open Systems Interconnection, by ISO)

| No. | Layer | Function | Examples |
|---|---|---|---|
| 7 | Application | Services to the user's programs | HTTP, FTP, SMTP, DNS |
| 6 | Presentation | Translation, encryption, compression | SSL/TLS, JPEG |
| 5 | Session | Opens, manages and closes sessions | Log-in sessions |
| 4 | Transport | Reliable end-to-end delivery; splits data into segments; error and flow control | TCP, UDP |
| 3 | Network | Logical addressing and routing of packets | IP; routers |
| 2 | Data link | Frames; physical (MAC) addresses; error detection on one link | Ethernet; switches |
| 1 | Physical | Sends raw bits as signals over the medium | Cables, hubs, radio |

Memory line (7 to 1): **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing.
Data goes down the layers at the sender (each adds a header) and up the layers at the receiver.

**TCP/IP model (the one in real use):** Application → Transport → Internet → Network access.

### Key protocols and standards

| Name | Job |
|---|---|
| IP | Addresses and routes packets. IPv4 addresses are 32-bit; IPv6 addresses are 128-bit. |
| TCP | Reliable, ordered delivery |
| UDP | Fast delivery without checking (video calls, games) |
| HTTP / HTTPS | Web pages; HTTPS is encrypted |
| **DNS** | Converts domain names (fpsc.gov.pk) into IP addresses (MCQ 2026) |
| DHCP | Gives each device an IP address automatically |
| SMTP, POP3, IMAP | E-mail sending and receiving |
| FTP | File transfer |
| IEEE 802.3 / 802.11 | Ethernet / Wi-Fi |

**Standards bodies:** IETF (internet protocols), W3C (web standards such as HTML), IEEE (Ethernet, Wi-Fi), ICANN (domain names and IP numbers), ISO, ITU.

**Terms:** URL (web address), browser, search engine, ISP, cloud computing (using remote servers for storage and software), Internet of Things (everyday devices connected to the internet).

**Security threats:** virus, worm, Trojan, ransomware, spyware, phishing, denial-of-service attacks. **Protection:** antivirus, firewall, updates, strong passwords with two-factor log-in, encryption, backups. Pakistan's cyber-crime law is the Prevention of Electronic Crimes Act (PECA) 2016.

---

## §8 Application and business software (asked 2023)

| Class | Purpose | Examples |
|---|---|---|
| Word processing | Documents | MS Word, Google Docs |
| Spreadsheet | Calculations, budgets, charts | MS Excel |
| Presentation | Slides | PowerPoint |
| Database management (DBMS) | Store and query records | Oracle, MySQL, MS Access |
| Communication | E-mail, meetings, chat | Outlook, Zoom, Teams |
| Graphics and media | Drawing, editing | Photoshop |
| Web browser | Access the web | Chrome, Firefox |

**Business software** supports the work of an organisation.

| Type | What it does | Examples |
|---|---|---|
| Accounting and payroll | Ledgers, invoices, salaries, tax | QuickBooks, Tally |
| Enterprise resource planning (ERP) | Joins finance, HR, production, stock and sales in one system | SAP, Oracle |
| Customer relationship management (CRM) | Tracks customers, sales leads, complaints | Salesforce |
| Supply chain and inventory | Orders, stock, delivery | — |
| Point of sale (POS) | Billing at shops | — |
| E-commerce platforms | Online selling and payment | Shopify, Daraz |
| Business intelligence | Dashboards and analysis for decisions | Power BI, Tableau |

- **Off-the-shelf (packaged)** software is ready-made and cheaper. **Custom (bespoke)** software is written for one organisation.
- Much of it is now rented online as **Software as a Service** (Microsoft 365, Google Workspace).
- Benefits: speed, accuracy, lower cost, better records and better decisions.

---

## §9 Social media websites (asked 2026)

**Definition.** Online platforms that let users create and share content and connect with one another.

| Kind | Platforms | Main use |
|---|---|---|
| Social networking | Facebook | Friends, groups, pages, marketplace |
| Microblogging | X (formerly Twitter), Threads | News, opinion, public debate |
| Professional | LinkedIn | Jobs, hiring, business contacts |
| Video | YouTube, TikTok | Tutorials, entertainment, adverts |
| Photo | Instagram, Pinterest, Snapchat | Visual branding |
| Messaging | WhatsApp, Telegram, WeChat | Chat, calls, business accounts |
| Forums | Reddit | Discussion |

**Use in business and communication:** brand pages, customer service and feedback, advertising, recruitment, sales through in-app shops, market research, internal and public communication. Governments and disaster agencies use them for alerts.

**Contribution to digital marketing**
1. **Reach:** billions of users; a small firm can reach a national audience.
2. **Low cost** compared with TV and print.
3. **Targeting:** adverts shown by age, place, interests and behaviour.
4. **Two-way engagement:** comments, messages, polls build loyalty.
5. **Measurable:** analytics show views, clicks and sales, so campaigns can be adjusted.
6. **Influencer and viral marketing:** trusted creators and shared content spread the message.
7. **Traffic and sales:** links to websites; direct selling ("social commerce").
8. **Real-time:** instant launches and responses.

**Problems:** fake news and deepfakes, loss of privacy, cyber-bullying and harassment, addiction and mental-health harm, scams, hate speech, echo chambers.

---

## §10 Information systems (asked 2026)

**Definition.** An organised combination of people, hardware, software, data, networks and procedures that collects, processes, stores and distributes information to support operations and decision-making.

```
            /  ESS  \          senior managers: strategy
           /   DSS    \        managers and analysts: semi-structured decisions
          /    MIS      \      middle managers: routine reports
         /     TPS        \    operational staff: daily transactions
```

| System | Users | Does | Example |
|---|---|---|---|
| Transaction processing system (TPS) | Clerks, operators | Records daily transactions | Sales till, payroll, ATM, ticket booking |
| Management information system (MIS) | Middle managers | Regular summary reports from TPS data for structured decisions | Monthly sales report |
| **Decision support system (DSS)** | Managers, analysts | Interactive analysis with models and "what-if" questions for semi-structured and unstructured problems | Loan risk analysis, pricing model |
| Executive support system (ESS) | Top management | Dashboards of key indicators; long-term view | Company performance dashboard |
| Expert system | Specialists | Uses stored expert knowledge and rules | Medical diagnosis aid |

**Parts of a DSS:** a database (internal and external data), a model base (statistical, financial and forecasting models), and a user interface. Many now add AI.

**Role of DSS in management and strategic planning**
1. **What-if and sensitivity analysis:** test the effect of a price rise, a new plant or a budget cut before acting.
2. **Forecasting:** demand, sales, revenue, cash flow.
3. **Resource allocation and budgeting:** best use of money, staff and stock.
4. **Risk analysis and simulation:** compare scenarios; judge uncertainty.
5. **Strategic choices:** new markets, locations (with GIS), mergers, product mix.
6. **Monitoring:** compares results with targets and flags problems early.
7. **Group decisions:** shared tools help teams reach agreement.
8. **Speed and quality:** decisions rest on data, not guesswork.
Limits: depends on good data and models; costly; managers may over-trust it.

**DSS vs MIS (MCQ 2026)**

| Point | MIS | DSS |
|---|---|---|
| Problems | Structured, routine | Semi-structured, unstructured |
| Output | Fixed periodic reports | Interactive, on-demand analysis |
| Focus | What happened (efficiency) | What if; what next (effectiveness) |
| Tools | Summaries | Models, simulation, prediction |
| Users | Middle managers | Managers and analysts at all levels |

---

## §11 Fundamentals of artificial intelligence (asked 2016, 2018, 2022, 2025)

**Definition.** Artificial intelligence (AI) is the branch of computer science that builds machines and programs able to do tasks that normally need human intelligence: learning, reasoning, solving problems, understanding language and recognising images and speech.

- The term was coined by John McCarthy in 1956. Alan Turing proposed the "Turing test" in 1950.

| Type | Meaning | Status |
|---|---|---|
| Narrow (weak) AI | Does one kind of task | All AI in use today |
| General AI | Human-level ability across tasks | Not yet achieved |
| Super AI | Beyond human ability | Hypothetical |

**AI vs traditional programming (asked 2025)**

| Point | Traditional programming | AI (machine learning) |
|---|---|---|
| Rules | Written by the programmer | Learned from data |
| Flow | Data + rules → answers | Data + answers → rules (a model) |
| Change | Must be re-coded | Improves with more data |
| Output | Fixed, predictable | Probable; can make mistakes |
| Good for | Clear, rule-based tasks (payroll) | Pattern tasks (faces, speech, language) |
| Explanation | Easy to trace | Often a "black box" |

**Main branches**

| Branch | What it does | Example |
|---|---|---|
| Machine learning | Learns patterns from data (supervised, unsupervised, reinforcement) | Spam filter, credit scoring |
| Deep learning | Machine learning with many-layered neural networks | Image and speech recognition |
| Natural language processing | Understands and produces human language | Translation, chatbots |
| Computer vision | Understands images and video | Face recognition, medical scans |
| Robotics | Machines that sense, decide and act | Factory robots, drones |
| Expert systems | Apply stored expert rules | Medical diagnosis |
| Generative AI | Creates text, images, audio, code | Large language models such as ChatGPT |

**Robotics (asked 2022).** The branch of engineering and AI that designs, builds and operates robots: programmable machines that sense their surroundings, process the information and act. Uses: car assembly, surgery, bomb disposal, warehouses, space exploration.

**Knowledge representation.** A knowledge graph stores facts as nodes (things) joined by edges (relationships). (MCQ 2026.)

**How AI helps humanity (asked 2018)**

| Field | Use |
|---|---|
| Health | Reading scans, early diagnosis, drug discovery, protein structure prediction |
| Agriculture | Crop and pest monitoring, yield forecasts |
| Education | Personal tutoring, translation |
| Finance | Fraud detection, credit scoring |
| Transport | Navigation, driver assistance, traffic control |
| Government | Service chatbots, tax analysis, crime mapping |
| Disasters and climate | Flood and weather prediction |
| Industry | Automation, quality checks, predictive maintenance |

**Risks:** job losses, biased or unfair decisions, loss of privacy, deepfakes and misinformation, lack of transparency, autonomous weapons, heavy energy use, dependence on a few large firms.
**Response:** laws and standards (the EU's AI Act, 2024), human oversight, data protection, reskilling. Pakistan approved a National AI Policy in 2025.

---

## §12 Basics of wireless communication

**Definition.** Sending information between two points without a physical wire, using electromagnetic waves (radio, microwave, infrared).

```
 Information -> TRANSMITTER (modulator + amplifier) -> antenna  ~~~ radio waves ~~~  antenna -> RECEIVER (demodulator) -> Information
```

- **Modulation:** placing the information on a high-frequency carrier wave by varying its amplitude (AM), frequency (FM) or phase. The receiver reverses this (demodulation).
- **Frequency** is measured in hertz. Higher frequency carries more data but travels a shorter distance.
- **Bandwidth:** the range of frequencies used; wider means more data.

| Service | Typical frequency |
|---|---|
| AM radio | About 0.5–1.6 MHz |
| FM radio | 88–108 MHz |
| Mobile phones | About 700 MHz–3.5 GHz |
| Wi-Fi, Bluetooth | 2.4 GHz (Wi-Fi also 5 and 6 GHz) |
| GPS | About 1.2 and 1.6 GHz |
| Satellite links | 4–40 GHz (C, Ku, Ka bands) |

| Technology | Range | Use |
|---|---|---|
| NFC | A few cm | Contactless payment |
| Bluetooth | About 10 m | Headsets, wearables |
| Wi-Fi | Tens of metres | Local internet access |
| Cellular | Kilometres per cell | Mobile phones |
| Satellite | Global | TV, remote links |

**Advantages:** mobility, no cabling, quick to set up, reaches remote places. **Limits:** interference, weaker security, limited spectrum, lower speed than fibre.
Pakistan's regulator is the Pakistan Telecommunication Authority (PTA).

---

## §13 Mobile communication (asked 2022, 2026)

**The cellular idea**
1. The service area is divided into small zones called **cells**, drawn as hexagons.
2. Each cell has a **base station** (tower) with antennas.
3. The same frequencies are reused in cells that are far enough apart (**frequency reuse**), so limited spectrum serves millions.
4. Base stations connect to a **mobile switching centre**, which links to other networks and the internet.

**How a call or data session works**
1. The phone turns voice into digital data and sends it as radio waves.
2. The nearest base station receives it and passes it to the switching centre.
3. The network looks up where the other phone is registered and routes the call to the base station nearest to it.
4. That station sends radio waves to the receiving phone, which turns them back into sound.

**Staying connected while moving: handover (handoff)**
- The phone keeps measuring the signal strength of its own cell and neighbouring cells.
- When a neighbour becomes stronger, the network moves the call or data session to the new base station and a new channel.
- This takes a fraction of a second and the user does not notice.
- **Roaming** extends this to another operator's network.

```
   ___       ___
  / A \_____/ C \      Cells A, B, C each have a tower.
  \___/  B  \___/      A phone moving A -> B -> C is handed over at each border.
      \_____/
```

**Generations**

| Generation | Period | Main feature |
|---|---|---|
| 1G | 1980s | Analog voice |
| 2G (GSM) | 1990s | Digital voice, SMS |
| 3G | 2000s | Mobile internet, video calls |
| 4G (LTE) | 2010s | Fast broadband, HD video, apps |
| 5G | 2019 onwards | Very high speed, very low delay, huge numbers of connected devices |

**Basic structure of a mobile phone (asked 2022):** antenna, radio transmitter and receiver, processor, memory and storage, battery (lithium-ion), touch screen, microphone and speaker, SIM card (identifies the subscriber), camera, sensors (GPS, accelerometer), operating system (Android, iOS).

Pakistan: 3G and 4G began in 2014. There are roughly 190 million mobile connections.

---

## §14 Satellite communication (asked 2021)

**Satellite.** A body that orbits a larger body.

| Point | Natural satellite | Artificial satellite |
|---|---|---|
| Origin | Formed by nature | Made and launched by people |
| Example | The Moon | Communication, weather, navigation satellites |
| Purpose | None intended | Built for a task |
| Control | None | Controlled from ground stations |
| Life | Billions of years | Usually 5–15 years |

The first artificial satellite was Sputnik 1 (USSR, 4 October 1957).

**Orbits**

| Orbit | Height | Period | Use |
|---|---|---|---|
| Low Earth orbit (LEO) | 160–2,000 km | About 90 minutes | Earth observation, space station, internet constellations |
| Medium Earth orbit (MEO) | 2,000–35,786 km | Hours | Navigation (GPS at about 20,200 km) |
| Geostationary orbit (GEO) | 35,786 km above the equator | 24 hours | TV, weather, communications; appears fixed in the sky |

Three geostationary satellites can cover almost the whole Earth.

**How a communication satellite works**
1. A ground (earth) station sends a signal up: the **uplink**.
2. The satellite's **transponder** receives it, amplifies it and shifts it to another frequency.
3. It sends it down over a wide area: the **downlink**.
4. Dishes within the coverage area ("footprint") receive it.
5. Solar panels power the satellite; small thrusters keep it in position.

```
                  SATELLITE (transponder)
                 /^                    \
        uplink  /                       \  downlink
               /                         v
   Earth station A                 Earth station B / home dishes
```

**Delay:** a signal to a geostationary satellite and back travels over 70,000 km, taking about a quarter of a second. This long distance is the main cause of latency. (MCQ 2026.)

**Uses:** TV and radio broadcasting, long-distance telephone, internet for remote areas, ships and aircraft, weather forecasting, navigation, remote sensing, military use, disaster communication, astronomy.

**Pakistan:** Badr-1 (1990, the first), PakSat-1R (2011, communications), PRSS-1 (2018, remote sensing), PakSat-MM1 (2024, communications).

---

## §15 Surveillance

**Definition.** The systematic watching of people, places or activities to collect information for security, safety or management.

| Technology | Use |
|---|---|
| CCTV and IP cameras | Streets, banks, offices, traffic |
| Face recognition and video analytics (AI) | Finding suspects, counting crowds |
| Automatic number-plate recognition | Traffic fines (e-challan), stolen vehicles |
| Drones (UAVs) | Borders, crowds, disaster areas |
| Satellites | Reconnaissance, border and crop monitoring |
| Radar and sonar | Aircraft, ships, submarines |
| Thermal and night-vision cameras | Night and border watch |
| Biometrics (fingerprint, face, iris) | Identity checks |
| Phone and internet monitoring; location tracking | Lawful interception, investigations |
| Sensors and RFID tags | Goods, access control |

**Uses:** crime prevention and investigation, counter-terrorism, traffic control, border security, disaster monitoring, disease surveillance, protection of key sites.

**Pakistan:** Safe City projects in Islamabad and Lahore use thousands of cameras linked to a command centre; NADRA holds the national biometric database.

**Concerns:** loss of privacy, misuse and profiling, data leaks, errors and bias in face recognition, cost. Safeguards: clear laws, court warrants, oversight, limits on how long data is kept.

---

## §16 Global Positioning System (GPS) (asked 2016, 2020, 2023, 2026)

**Definition.** A satellite-based navigation system that gives position, speed and time anywhere on Earth, in any weather, at any hour. Owned by the United States; its original name is **NAVSTAR**. Fully working since 1995. Free for civilian use.

**Three segments**

| Segment | What it is |
|---|---|
| Space | At least 24 satellites (about 31 in service) in six orbits at about 20,200 km, each circling twice a day. At least four are in view from any place. |
| Control | A master control station in Colorado and monitoring stations worldwide. They track satellites and correct their clocks and orbit data. |
| User | Receivers in phones, cars, ships, aircraft, survey instruments |

**How GPS finds a receiver's position**
1. Each satellite carries an **atomic clock** and continuously broadcasts a radio signal giving its position and the exact time of sending.
2. The receiver notes when the signal arrives. Travel time × speed of light = distance to that satellite.
3. One distance places the receiver somewhere on a sphere around that satellite.
4. A second satellite narrows this to a circle; a third to two points, one of which is on the Earth.
5. A **fourth** satellite corrects the error of the receiver's cheap clock and gives height.
6. This method is **trilateration**. Output: latitude, longitude, altitude and time.

```
        Sat 1        Sat 2        Sat 3        Sat 4
          \            |            /            /
           \  d1       | d2        / d3         / d4 (clock correction, height)
            \          |          /            /
             +------ RECEIVER (position where the spheres meet) ------+
```

**Accuracy:** about 3–5 m for ordinary receivers; centimetres with correction systems. Errors come from the atmosphere, reflections off buildings, and poor satellite geometry. Signals are weak indoors and can be jammed.

**Applications:** road, sea and air navigation; maps and ride-hailing; surveying and GIS mapping; precision farming; fleet and parcel tracking; search and rescue; military guidance; exact time for banks, phone networks and power grids; measuring plate movement; tracking wildlife.

**Other systems:** GLONASS (Russia), Galileo (EU), BeiDou (China), NavIC (India).

---

## §17 Fibre optics (asked 2016, 2018, 2019, 2020, 2022, 2024, 2025)

The most repeated single topic in the paper. Learn the diagram.

**Definition.** An optical fibre is a hair-thin, flexible strand of very pure glass (or plastic) that carries information as pulses of light.

**Construction**

| Part | Material and job |
|---|---|
| **Core** | Central glass thread; light travels in it; higher refractive index |
| **Cladding** | Glass layer round the core with a lower refractive index; reflects light back into the core |
| **Buffer coating** | Plastic layer; protects from moisture and scratches |
| Strength members and outer jacket | Tough fibres and a plastic sheath; protect the cable |

```
   Cross-section                 Side view (light path)
   _____________                 ======================================  cladding (lower index)
  /  jacket     \                 \    /\    /\    /\    /\    /\    /
 |  _________    |      light ---> \  /  \  /  \  /  \  /  \  /  \  / ---> core (higher index)
 | / cladding \  |                  \/    \/    \/    \/    \/    \/
 | |  (core)  |  |               ======================================  cladding
 |  \________/   |                 total internal reflection at each bounce
  \_____________/
```

**Principle: total internal reflection.** When light travelling in a denser medium (the core) meets the boundary with a less dense medium (the cladding) at an angle greater than the **critical angle**, none of it passes through. All of it is reflected back. The light zig-zags down the core with very little loss, even round gentle bends.

**How a fibre link works**
1. **Transmitter:** an LED or laser turns the electrical signal into light pulses (on = 1, off = 0). Infrared light is used.
2. **Fibre:** carries the pulses by total internal reflection.
3. **Repeaters or optical amplifiers** boost the signal every 80–100 km on long routes.
4. **Receiver:** a photodiode turns the light back into an electrical signal.

**Types:** single-mode (very thin core, one light path, laser source, long distance) and multi-mode (wider core, many paths, LED source, short distance).

**Advantages**
1. Very high bandwidth: far more data than copper. (MCQ 2026: data travels as light with very little attenuation.)
2. Low signal loss, so fewer repeaters over long distances.
3. Immune to electrical and radio interference; no crosstalk.
4. Hard to tap, so more secure.
5. Thin and light.
6. No electric current, so no sparks: safe in hazardous places.
7. Made from silica (sand), which is plentiful; long life.

**Disadvantages:** high installation cost; fragile and cannot be bent sharply; joining (splicing) needs skill and special tools; hard to repair; cannot carry electrical power.

**Uses**
- Telecommunications: internet backbone, undersea cables (which carry almost all intercontinental data), telephone, cable TV, fibre to the home.
- Medicine: endoscopes for seeing inside the body; laser surgery.
- Sensors for temperature, pressure and strain.
- Military and aircraft wiring; industrial inspection; decorative lighting.

Charles Kao showed in 1966 that pure glass fibre could carry signals over long distances (Nobel Prize 2009). Pakistan connects to the world through several undersea fibre cables landing at Karachi.
