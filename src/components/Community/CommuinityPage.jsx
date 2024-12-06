import React from "react";
import ImageComponent from "../Assets/ImageComponent";
// import FeaturedQuestions from "./FeaturedQuestions";
// import QuestionsForUsers from "./QuestionsForUsers";
// import InterestedTopics from "./InterestedTopics";
// import TopAnswerers from "./TopAnswerers";
// import {
//   PencilSquareIcon,
//   UserMinusIcon,
//   ClipboardDocumentCheckIcon,
//   DocumentChartBarIcon,
//   RssIcon,
//   AdjustmentsVerticalIcon,
//   FireIcon,
//   ChevronDoubleUpIcon,
//   ChevronDoubleDownIcon,
//   EyeIcon,
//   ChatBubbleBottomCenterTextIcon,
// } from "@heroicons/react/24/outline";
const CommunityPage = ({ user }) => {
  const featuredQuestions = [
    {
      question:
        "Explain the principle of least privilege and its importance in cybersecurity.",
      followCount: 10,
      answerCount: 5,
      askedByUser: "Jay",
      userImage: "https://picsum.photos/100/100/",
      createdDate: "Dec 4, 2024",
      userLevel: 5,
      userPoints: 20304,
      topAnswer:
        "The principle of least privilege means giving users the minimum levels of access – or permissions – needed to perform their job functions. It is important because it reduces the risk of malicious activity and limits the potential damage from accidental or intentional misuse of privileges. ",
    },
    {
      question:
        "Define social engineering in the context of cybersecurity and provide an example.",
      followCount: 10,
      answerCount: 5,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Dec 4, 2024",
      userLevel: 10,
      userPoints: 29004,
      topAnswer:
        "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. An example is phishing, where attackers send fraudulent emails to trick individuals into revealing sensitive information or installing malware.Ransomware is a type of malware that encrypts a victims files and demands payment for the decryption key. It typically spreads through phishing emails, malicious attachments, or exploiting vulnerabilities in software.",
    },
    {
      question:
        "What is a Virtual Private Network (VPN) and how does it enhance security?",
      followCount: 11,
      answerCount: 5,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 29, 2024",
      userLevel: 9,
      userPoints: 21000,
      topAnswer:
        "A Virtual Private Network (VPN) is a service that encrypts your internet connection and hides your IP address, making your online actions virtually untraceable. It enhances security by protecting your data from hackers and ensuring privacy when using public Wi-Fi.",
    },
    {
      question:
        "Describe what encryption is and why it is important for data security.",
      followCount: 8,
      answerCount: 4,
      askedByUser: "Bob",
      userImage: "https://picsum.photos/100/102/",
      createdDate: "Dec 2, 2024",
      userLevel: 9,
      userPoints: 18000,
      topAnswer:
        "Encryption is the process of converting data into a code to prevent unauthorized access. It is important for data security because it protects sensitive information from being read by anyone who does not have the decryption key, ensuring confidentiality and integrity.",
    },
    {
      question: "What is phishing and how can it be prevented?",
      followCount: 13,
      answerCount: 6,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 26, 2024",
      userLevel: 9,
      userPoints: 24000,
      topAnswer:
        "Phishing is a cyber attack that uses disguised email as a weapon to trick recipients into revealing personal information. It can be prevented by educating users about recognizing phishing attempts, using email filters, and implementing multi-factor authentication.",
    },
  ];

  const otherQuestions = [
    {
      question:
        "What is the difference between symmetric and asymmetric encryption?",
      followCount: 5,
      answerCount: 2,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Dec 4, 2024",
      userLevel: 9,
      userPoints: 15000,
      topAnswer: "",
    },

    {
      question:
        "What is Multi-Factor Authentication (MFA) and give an example of how it is used.",
      followCount: 9,
      answerCount: 3,
      askedByUser: "Dana",
      userImage: "https://picsum.photos/100/104/",
      createdDate: "Nov 30, 2024",
      userLevel: 9,
      userPoints: 19500,
      topAnswer:
        "Multi-Factor Authentication (MFA) is a security system that requires more than one method of authentication from independent categories of credentials to verify a user's identity. An example is using a password and a one-time code sent to a user's phone.",
    },

    {
      question: "Describe what ransomware is and how it typically spreads.",
      followCount: 14,
      answerCount: 8,
      askedByUser: "Frank",
      userImage: "https://picsum.photos/100/106/",
      createdDate: "Nov 28, 2024",
      userLevel: 9,
      userPoints: 23000,
      topAnswer:
        "Ransomware is a type of malware that encrypts a victim's files and demands payment for the decryption key. It typically spreads through phishing emails, malicious attachments, or exploiting vulnerabilities in software.",
    },
    {
      question: "What is the purpose of a firewall in network security?",
      followCount: 7,
      answerCount: 4,
      askedByUser: "Grace",
      userImage: "https://picsum.photos/100/107/",
      createdDate: "Nov 27, 2024",
      userLevel: 9,
      userPoints: 17500,
      topAnswer:
        "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. Its purpose is to create a barrier between a trusted internal network and untrusted external networks, such as the internet.",
    },
    {
      question: "What is the role of a Security Operations Center (SOC)?",
      followCount: 4,
      answerCount: 2,
      askedByUser: "Mia",
      userImage: "https://picsum.photos/100/113/",
      createdDate: "Nov 30, 2024",
      userLevel: 9,
      userPoints: 14000,
      topAnswer: "",
    },
    {
      question: "How can organizations protect against insider threats?",
      followCount: 9,
      answerCount: 6,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 29, 2024",
      userLevel: 9,
      userPoints: 19000,
      topAnswer: "",
    },
    {
      question:
        "What is the importance of regular software updates and patch management?",
      followCount: 10,
      answerCount: 7,
      askedByUser: "Olivia",
      userImage: "https://picsum.photos/100/115/",
      createdDate: "Nov 28, 2024",
      userLevel: 9,
      userPoints: 20000,
      topAnswer: "",
    },
    {
      question:
        "Describe the concept of network segmentation and its benefits.",
      followCount: 3,
      answerCount: 1,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 27, 2024",
      userLevel: 9,
      userPoints: 13000,
      topAnswer: "",
    },
    {
      question: "What are the best practices for securing cloud environments?",
      followCount: 11,
      answerCount: 8,
      askedByUser: "Quinn",
      userImage: "https://picsum.photos/100/117/",
      createdDate: "Nov 26, 2024",
      userLevel: 9,
      userPoints: 21000,
      topAnswer: "",
    },
    {
      question:
        "How does a Distributed Denial-of-Service (DDoS) attack differ from a DoS attack?",
      followCount: 12,
      answerCount: 9,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 25, 2024",
      userLevel: 9,
      userPoints: 22000,
      topAnswer: "",
    },
    {
      question: "What is the purpose of a firewall in network security?",
      followCount: 7,
      answerCount: 4,
      askedByUser: "Grace",
      userImage: "https://picsum.photos/100/107/",
      createdDate: "Nov 27, 2024",
      userLevel: 9,
      userPoints: 17500,
      topAnswer:
        "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. Its purpose is to create a barrier between a trusted internal network and untrusted external networks, such as the internet.",
    },
    {
      question: "What is the role of a Security Operations Center (SOC)?",
      followCount: 4,
      answerCount: 2,
      askedByUser: "Mia",
      userImage: "https://picsum.photos/100/113/",
      createdDate: "Nov 30, 2024",
      userLevel: 9,
      userPoints: 14000,
      topAnswer: "",
    },
    {
      question: "How can organizations protect against insider threats?",
      followCount: 9,
      answerCount: 6,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 29, 2024",
      userLevel: 9,
      userPoints: 19000,
      topAnswer: "",
    },
    {
      question:
        "What is the importance of regular software updates and patch management?",
      followCount: 10,
      answerCount: 7,
      askedByUser: "Olivia",
      userImage: "https://picsum.photos/100/115/",
      createdDate: "Nov 28, 2024",
      userLevel: 9,
      userPoints: 20000,
      topAnswer: "",
    },
    {
      question:
        "Describe the concept of network segmentation and its benefits.",
      followCount: 3,
      answerCount: 1,
      askedByUser: "Anonymous",
      userImage: "",
      createdDate: "Nov 27, 2024",
      userLevel: 9,
      userPoints: 13000,
      topAnswer: "",
    },
  ];
  const topics = [
    {
      topic: "CVE",
      topicID: 1,
    },
    {
      topic: "Phishing",
      topicID: 2,
    },
    {
      topic: "Malware",
      topicID: 3,
    },
    {
      topic: "Ransomware",
      topicID: 4,
    },
    {
      topic: "DDoS",
      topicID: 5,
    },
    {
      topic: "Zero-Day Exploits",
      topicID: 6,
    },
    {
      topic: "Social Engineering",
      topicID: 7,
    },
    {
      topic: "Encryption",
      topicID: 8,
    },
    {
      topic: "Firewall",
      topicID: 9,
    },
    {
      topic: "Intrusion Detection Systems",
      topicID: 10,
    },
  ];

  const topAnswerers = [
    {
      name: "Alice",
      userImage: "https://picsum.photos/100/100",
    },
    {
      name: "Bob",
      userImage: "https://picsum.photos/100/101",
    },
    {
      name: "Charlie",
      userImage: "https://picsum.photos/100/102",
    },
    {
      name: "Dana",
      userImage: "https://picsum.photos/100/103",
    },
    {
      name: "Eve",
      userImage: "https://picsum.photos/100/104",
    },
    {
      name: "Alice",
      userImage: "https://picsum.photos/100/100",
    },
    {
      name: "Bob",
      userImage: "https://picsum.photos/100/101",
    },
    {
      name: "Charlie",
      userImage: "https://picsum.photos/100/102",
    },
    {
      name: "Dana",
      userImage: "https://picsum.photos/100/103",
    },
    {
      name: "Eve",
      userImage: "https://picsum.photos/100/104",
    },
  ];

  return (
    <>
      {/* First Section: Image */}
      <div className="image-section">
        <ImageComponent className="m-0 w-full" src="/community.jpg" />
      </div>
      {/* <div className="mb-10 ml-4 max-w-none">
        <div className="mb-4 flex flex-col gap-4 xl:flex-row">
          <div className="flex-1">
            <FeaturedQuestions questions={featuredQuestions} />
            <QuestionsForUsers questions={otherQuestions} />
          </div>
          <div className="hidden xl:block xl:w-1/4">
            <div>
              <InterestedTopics topics={topics} />
            </div>
            <div className="py-4">
              <TopAnswerers answerers={topAnswerers} />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CommunityPage;
