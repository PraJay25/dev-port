import React from "react";
import ImageComponent from "../Assets/ImageComponent";
import FeaturedQuestions from "./FeaturedQuestions";
import QuestionsForUsers from "./QuestionsForUsers";
import InterestedTopics from "./InterestedTopics";
import TopAnswerers from "./TopAnswerers";
import myAnswerers from "@/data/answers";
import topics from "@/data/topics";
import otherQuestions from "@/data/otherQuestions";
import featuredQuestions from "@/data/featuredQuestions";

import {
  PencilSquareIcon,
  UserMinusIcon,
  ClipboardDocumentCheckIcon,
  DocumentChartBarIcon,
  RssIcon,
  AdjustmentsVerticalIcon,
  FireIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  EyeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const CommunityPage = ({ user }) => {
  featuredQuestions;

  return (
    <>
      {/* First Section: Image */}
      <div className="image-section">
        <ImageComponent className="m-0 w-full" src="/community.jpg" />
      </div>
      <div className="mb-10 ml-4 max-w-none">
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
              <TopAnswerers answerers={myAnswerers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
