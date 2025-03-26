import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CakeSliceIcon,
  CarIcon,
  ExternalLink,
  SchoolIcon,
  SparklesIcon,
  StethoscopeIcon,
} from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-4 mt-40" id="projects">
      <h1 className="text-4xl font-mono font-semibold">Projects</h1>
      <p className="text-lg font-sans text-zinc-500 font-medium mb-6">
        Below are some projects in which I played a key role:
      </p>
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-2 items-center">
              <SchoolIcon /> Course Booking System for a School
            </CardTitle>
            <CardDescription className="text-lg">
              A course booking system tailored for a physical, offline
              educational institution. The system features two distinct user
              interfaces: a publicly accessible website for course information,
              course booking, news, and blog content, and a dedicated
              administrative dashboard for internal management.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg">
            <ul className="px-4">
              <li className="list-disc">
                Developed a responsive public-facing website using NextJS for
                class bookings, news, and information dissemination.
              </li>
              <li className="list-disc">
                Developed an admin dashboard with CMS-like features utilizing
                Refine and AntDesign, enhancing administrative control and
                content management.
              </li>
              <li className="list-disc">
                Implemented key features included: course booking, course
                management, appointment scheduling, highly detailed filtering
                capabilities, course room and instructor management, a calendar
                view for course and appointment visualization, and public-facing
                content including a blog, news section, and course filtering
                page, amongst several other features and nice to haves.
              </li>
            </ul>
            <div>
              <Link href="https://atrium-berlin.de" target="_blank">
                <Button>
                  Live Site <ExternalLink />
                </Button>
              </Link>
            </div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  More about the project
                </AccordionTrigger>
                <AccordionContent className="text-[18px]">
                  <div>
                    <b>Public Facing Website</b>: This website provides an
                    overview of all available courses, including detailed
                    descriptions, instructor profiles, and a news and blog
                    section.
                    <br />
                    <b>Administrative Dashboard</b>: The core of the system is
                    an administrative dashboard designed for management of
                    several resources and functions that include:
                  </div>
                  <div>
                    <br /> • <b>Course Management</b>: Creation and management
                    of diverse course types, each with configurable schedules
                    (including recurring semester-based options).
                    <br /> • <b>Instructor Management</b>: Support for multiple
                    instructors per course, alongside detailed profiles and
                    scheduling capabilities.
                    <br /> • <b>Room & Resource Management</b>: A blocking
                    system to prevent scheduling conflicts between rooms and
                    instructors.
                    <br /> • <b>Calendar & Booking System</b>: An integrated
                    calendar with booking functionality, utilizing ICS files for
                    subscription management. It tracks and manages bookings for
                    individual appointments.
                    <br /> • <b>Content Management System (CMS)</b>: A built-in
                    CMS for administrators to easily update website content,
                    create news articles, and manage blog posts.
                    <br /> • <b>Email Communication</b>: Automated email
                    notifications for post-booking follow-up, booking
                    confirmations, and class reminders.
                    <br /> • <b>Cancellation & Modification Management</b>: The
                    system manages the blocking or cancellation of appointments
                    with detailed reason tracking and automated email
                    notifications to students.
                    <br /> • <b>Form Generation</b>: The system generates
                    downloadable PDF forms for students to complete
                    post-booking.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-2 items-center">
              <CarIcon /> CRM for Car Leasing Agency
            </CardTitle>
            <CardDescription className="text-lg">
              CRM system designed to streamline the entire car leasing process
              for a car leasing agency. The system serves as a centralized
              repository for customer data, for efficient lead management and
              conversion.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg">
            <ul className="px-4">
              <li className="list-disc">
                Scoped and planned the project, translated business requirements
                to technical requirements, designed the ERD.
              </li>
              <li className="list-disc">
                Built backend functionalities using NestJS and Prisma ORM,
                managing data interactions between CSV files and the database.
              </li>
              <li className="list-disc">
                Designed the front-end CRM interface leveraging Refine,
                improving user accessibility and operational efficiency.
              </li>
            </ul>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  More about the project
                </AccordionTrigger>
                <AccordionContent className="text-[18px]">
                  <div className="font-bold">Key Components:</div>
                  <br />
                  <div>
                    <b>1. CRM Dashboard</b>: The core of the solution is a CRM
                    dashboard providing a single source of truth for all
                    customer information. This dashboard features:
                    <br /> • <b>Lead Management</b>: Capturing and tracking
                    customer inquiries originating from targeted marketing
                    campaigns (e.g., Google Ads) and automatically converting
                    them into leads.
                    <br /> • <b>Detailed Customer Profiles</b>: Comprehensive
                    data logging, including financial history, employer
                    information, and bank details, enabling informed
                    decision-making. This is realized when the customer inquiry
                    successfully converts into a committed buyer.
                    <br /> • <b>Stage-Based Tracking</b>: A dynamic system to
                    track customer progression through the leasing process,
                    facilitating targeted communication and accelerating deal
                    closure.
                    <br /> • <b>Role-Based Access</b>: The dashboard
                    incorporates tiered access permissions for administrators,
                    managers, and employees, for data security and layered
                    operations.
                    <br />
                    <br />
                    2. <b>Dedicated Landing Page/Website</b>: A landing page,
                    driven by targeted Google Ads campaigns, provides potential
                    customers with a clean user experience for vehicles and
                    leasing periods, directly feeding leads into the CRM.
                    <br />
                    <br />
                    3. <b>Contract Management Module</b>: A dedicated module
                    within the CRM that manages all contractual aspects,
                    including:
                    <br /> • <b>Contract Tracking</b>: Secure storage of the
                    leasing contract, including contract number and key details.
                    <br /> • <b>Vehicle Order Tracking</b>: Real-time updates on
                    vehicle information, including registration number, carrier
                    company, terminal of arrival, accessories provided, and
                    delivery agency. Along with automated tracking of all
                    relevant dates and times associated with the leasing
                    process.
                    <br />
                    <br />
                    4. <b>Automated Reminder System</b>: A reminder system that
                    automatically prompts customers (through email) to complete
                    their information at each stage of the leasing process, for
                    data capture.
                    <br />
                    <br />
                    5. <b>Campaign & Vehicle Management</b>: The system also
                    incorporates tools for managing marketing campaigns, vehicle
                    inventory (including color, accessories, mileage, and
                    pricing), and dynamically updating the information displayed
                    on the landing page/website.
                    <br />
                    <br />
                    6. <b>Reporting & Data Export</b>: The system facilitates
                    the import and export of CSV data at various stages of the
                    deal pipeline for reporting and analysis.
                    <br />
                    <br />
                    7. <b>Feedback System</b>: A feedback system that allows for
                    the collection of customer insights, contributing to the
                    improvement of the leasing process.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-2 items-center">
              <CakeSliceIcon />{" "}
              <SparklesIcon size={"18px"} className="-ml-3 -mt-5" /> Chatbot: An
              AI-Driven Solution for Confectionery
            </CardTitle>
            <CardDescription className="text-lg">
              An AI Chatbot developed for a confectionary store that converses
              with customers and takes order, with a back-end that creates
              invoice, handles billing and communicates with Shopify.
              Conversations can take place through Hubspot Live Chat, Whatsapp
              or a web app.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg">
            <ul className="px-4">
              <li className="list-disc">
                Developed a NextJS front-end chat interface to facilitate
                intuitive customer interactions.
              </li>
              <li className="list-disc">
                Built a backend system integrated with HubSpot CRM and webhooks
                to sync AI chatbot functions with live chat and WhatsApp
                communications.
              </li>
              <li className="list-disc">
                Implemented a queuing system to handle consecutive user
                messages, rate-limits to prevent abuse, and utilized OpenAI’s
                Assistant API for conversational capabilities, incorporating
                function-calling to automate order creation within HubSpot.
              </li>
              <li className="list-disc">
                Integrated payment through Stripe, and handled orders on Shopify
                using Shopify&apos;s GraphQL API. Handled cases for order
                creation and refunds, synchronising with Stripe.
              </li>
              <li className="list-disc">
                Implemented an agent handoff feature to allow <i>human</i>{" "}
                employees to take over when needed.
              </li>
            </ul>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  More about the project
                </AccordionTrigger>
                <AccordionContent className="text-[18px]">
                  <div className="font-bold">
                    Solution: Platform that streamlines the cake customization
                    process, automating communication with customers and
                    simplifying order management. By integrating AI-powered
                    chatbots with Hubspot, it reduces reliance on human agents.
                  </div>
                  <br />
                  <div>
                    Platform delivers a faster, more efficient, and personalized
                    cake ordering experience, reducing operational costs. Key
                    Features & Benefits:
                    <br /> • <b>AI-Powered Chatbot</b>: An integrated chatbot,
                    powered by OpenAI’s Assistant, guides customers through cake
                    selection and customization options via WhatsApp and
                    Hubspot’s live chat.
                    <br /> • <b>Automated Order Creation</b>: The chatbot
                    utilizes OpenAI’s function-calling to automatically create
                    orders within HubSpot, eliminating manual data entry.
                    <br /> • <b>Integrations</b>: The platform connects HubSpot
                    CRM, Shopify, WhatsApp, and a dedicated customer-facing SPA
                    (Single Page Application) for direct chatbot interaction.
                    <br /> • <b>Image Analysis</b>: Customers can upload images
                    during the conversation, and the chatbot leverages this
                    information to refine cake specifications and
                    recommendations.
                    <br /> • <b>Payments</b>: Secure transactions are processed
                    through Stripe integration with Shopify.
                    <br /> • <b>Agent Handoff</b>: A smooth transition between
                    the AI chatbot and human agents via Hubspot-Whatsapp
                    integration allowing complex requests to be handled through
                    intervention by an employee to maintain quality customer
                    service.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex flex-row gap-2 items-center">
              <StethoscopeIcon /> Online medical consultation app
            </CardTitle>
            <CardDescription className="text-lg">
              A unified medical consultation platform that connects
              administrators, doctors and patients (customers).
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-lg">
            <ul className="px-4">
              <li className="list-disc">
                Overhauled the application interfaces to align with modern
                standards and enhance user experience. Reworked several back-end
                functionalities to fix issues and bugs present on the system.
              </li>
              <li className="list-disc">
                Integrated third-party video call APIs into the desktop
                application, ensuring seamless video communication capabilities.
              </li>
              <li className="list-disc">
                Implemented logging and time based pricing system for the video
                call feature.
              </li>
              <li className="list-disc">
                Developed an admin panel and end-user interfaces, to view,
                manage download reports.
              </li>
              <li className="list-disc">
                Designed and implemented several features for a patient
                (customer) facing React Native application.
              </li>
            </ul>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-md">
                  More about the project
                </AccordionTrigger>
                <AccordionContent className="text-[18px]">
                  <div className="font-bold">
                    The system involves a medical consultation dashboard
                    designed to streamline the management of doctor-patient
                    interactions, various ailments, report generation, and
                    statistical analysis. It consists of three main components:
                  </div>
                  <br />
                  <div>
                    <br />
                    <b>1. Administrator Dashboard</b>: A desktop application
                    tailored for administrative personnel to efficiently manage
                    and monitor data related to doctors, patients, and their
                    respective medical histories. Administrators can monitor the
                    performance of healthcare professionals, the system allows
                    the admin to track key metrics such as doctor session data
                    and log activity.
                    <br />
                    <br />
                    <b>2. Doctor&apos;s Workstation</b>: The same desktop
                    application with a separate interface specifically designed
                    for doctors to view, manage, and process medical requests
                    from patients based on their ailment or disease. The
                    platform facilitates video calls and text communication with
                    patients, enabling medical professionals to make diagnoses,
                    create detailed reports within the dashboard, and share
                    these insights directly with the patient.
                    <br />
                    <br />
                    <b>3. Patient Application</b>: A mobile application
                    specifically designed for patients to securely upload their
                    medical histories, submit medical condition requests, engage
                    in video consultations and text chat with healthcare
                    professionals, access the diagnosis and reports from within
                    the application, and obtain cost estimates based on their
                    medical insurance coverage. Patients can add their payment
                    details directly within the app, with billing and payment
                    processing based on the duration of each video call
                    consultation session.
                    <br />
                    <br />
                    This system was aimed to create a smooth interface for
                    interaction between doctors and patients, along with
                    efficient organization of medical information. It promotes
                    prompt diagnosis and effective treatment strategies.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
