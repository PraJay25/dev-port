import React from "react";

const About = () => {
  return (
    <section>
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-[300px] flex justify-center items-center"
        style={{
          backgroundImage: `url('/images/About.jpg')`, // Replace with your image path
        }}
      >
        <h1 className="bg-white text-black text-3xl font-bold px-6 py-2 shadow-md">
          About
        </h1>
      </div>

      {/* Paragraph Section */}
      <div className="bg-[#f9f9f9] text-gray-700 py-8 px-6 lg:px-20">
        <p className="leading-relaxed text-sm">
          This is some dummy copy. You’re not really supposed to read this dummy
          copy; it is just a place holder for people who need some type to
          visualize what the actual copy might look like if it were real
          content.
          <br />
          <br />
          If you want to read, I might suggest a good book, perhaps{" "}
          <a
            href="/hemingway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500  hover:text-orange-600"
          >
            Hemingway
          </a>{" "}
          or{" "}
          <a
            href="/melville"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            Melville
          </a>
          . That’s why they call it, the dummy copy. This, of course, is not the
          real copy for this entry. Rest assured, the words will expand the
          concept. With clarity. Conviction. And a little wit.
          <br />
          <br />
          In today’s competitive{" "}
          <a
            href="/market-environment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500  hover:text-orange-600"
          >
            market environment
          </a>
          , the body copy of your entry must lead the reader through a series of{" "}
          <span className="text-black font-bold">
            disarmingly simple thoughts
          </span>
          . All your supporting arguments must be communicated with simplicity
          and charm. And in such a way that the reader will read on. (After all,
          that’s a reader’s job: to read, isn’t it?) And by the time your
          readers have reached this point in the finished copy, you will have
          convinced them that you not only respect their intelligence but you
          also{" "}
          <span className="text-black font-bold">
            understand their needs as consumers
          </span>
          .
          <br />
          <br />
          As a result of which, your entry will repay your{" "}
          <a
            href="/efforts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500  hover:text-orange-600"
          >
            efforts
          </a>
          . Take your sales; simply put, they will rise. Likewise your
          credibility. There’s every chance your competitors will wish they’d
          placed this entry, not you. While your customers will have probably
          forgotten that your competitors even exist. Which brings us, by a
          somewhat circuitous route, to another small point, but one which we
          feel should be raised.
          <br />
          <br />
          <a
            href="/truth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500  hover:text-orange-600"
          >
            Truth
          </a>
          be told, as a marketer, you probably don’t even believe in body copy.
          Let alone long body copy. Well, who’s to blame you? Fact is, too much
          long body copy is dotted with such indulgent little phrases like truth
          is, fact is, and who’s to blame you. Trust us: we guarantee, with a
          hand over our heart, that no such indulgent rubbish will appear in
          your entry. That’s why God gave us big blue pencils.
          <br />
          <br />
          For you, the skies will be blue, the birds will sing, and your copy
          will be crafted by a dedicated little man whose wife will be sitting
          at home, knitting, wondering why your entry demands more of her
          husband‘s time than it should. But you will know why, won‘t you? You
          will have given her husband a chance to immortalize himself in print,
          writing some of the most persuasive prose on behalf of a truly
          enlightened purveyor of{" "}
          <a
            href="/widgets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            widgets
          </a>
          . And so, while your dedicated reader, enslaved to each mellifluous
          paragraph, clutches his newspaper with increasing interest and
          intention to purchase, you can count all your increased profits and
          take pots of money to your bank.
          <br />
          <br />
          Sadly, this is not the real copy for this entry. But it could well be.
          All you have to do is look at the{" "}
          <a
            href="/account-executive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500  hover:text-orange-600"
          >
            account executive
          </a>{" "}
          sitting across your desk (the fellow with the lugubrious face and the
          calf-like eyes), and say “Yes! Yes! Yes!” And anything you want, body
          copy, dinners, women, will be yours. Couldn’t be fairer than that,
          could we?
        </p>
      </div>
    </section>
  );
};

export default About;
