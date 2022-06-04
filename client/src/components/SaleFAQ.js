import React from 'react'
import Footer from './Footer'
import Faq from 'react-faq-component';


const data = {
  title: "Frequent Asked Questions",
  rows: [
    {
      title: "When is the best time to sell my home?",
      content: "The best time to sell a home will be different from real estate community to real estate community.  In most cases, the spring months are the best time to be selling a home.  The spring months will vary from community to community.  For example, the spring market in the Webster, New York real estate community maybe April, May, and June while the spring market in Coral Springs, Florida maybe March & April. Every home sellers situation is different, in some cases, selling a home during the fall and winter months actually maybe better than waiting until the spring real estate market.  This is due to a combination of many factors including lower competition and that serious buyer’s are always looking for a home, just to mention a couple factors. "
    },
    {
      title: "What steps should I take to prepare my home for sale?",
      content: "There are several things you need to know before listing your home for sale!  A frequently asked question from home sellers before listing is what steps should be taken before listing their home.  Not properly preparing a home for sale can put a home owner at a huge disadvantage.<br> <br>The expression “You never get a second chance to make a first impression” is absolutely true when it comes to selling a home.  When selling a home you must be sure that your home presents itself in the best possible light. Making sure clutter is at a minimum, freshly painting rooms, installing new carpeting, or ensuring odors are non-existent are just a handful of things that should be done before listing your home for sale."
    },
    {
      title: "What should I disclose to potential buyers?",
      content: "When selling a home, it’s important you disclose to potential buyers anything you are aware of in your home.  Nobody likes “getting the raw end of a deal” when it comes to buying a home, car, or anything for that matter.  If you’re aware of defects with a roof, appliance, or home in general, you’re always going to be better off being honest and upfront.  If you’re aware of defects, whenever possible, fixing them before going on the market is best.  This can avoid potential issues and/or lawsuits once your home is under contract, after inspections, and even years after you have sold your home."
    },
    {
      title: "How much is my home worth?",
      content: "Assessed value is not the same as market value or appraised value.  There are many homes that could be sold for significantly more than an assessed value and others that maybe sold for significantly less.  The assessed value of a home is used for the purpose of taxes in your local municipality.  The assessed value of a home is multiplied by the local tax rate to determine what your yearly taxes are.  The assessed value has no impact on how much your home is worth to a potential buyer in the marketplace.<br><br>Unfortunately, there are many home buyer’s who believe that a home that is listed higher than the assessed value is overpriced.  This is the furthest from the truth.  Home buyer’s also question if something is wrong with a home if the list price is much less than the assessed value.  The bottom line is the assessed value has no impact on how much your home is worth.  There are home owners who don’t pay attention to their assessed value, just to find out their municipality has been slowly raising it, year after year, even though the market value hasn’t been increasing."
    },
    {
      title: "What is the difference between a list price and sale price?",
      content: "There are a handful of methods that Realtors use to determine the value of a home.  The most common method to determining the value of a home is by completing a comparative market analysis.  A comparative market analysis is an in-depth evaluation of recently sold “comparable” homes in the past 6-12 months.  A comparative market analysis, also known as a “CMA,” isn’t a crystal ball that determines what a home will sell for, however, if performed by a top Realtor, it should greatly narrow the sale price range.<br><br>A professionally completed “CMA” will take into account many features of not only a home, but also the local area and neighborhood.  Considerations that a professionally completed “CMA” include, but is not limited too:<li>Square footage</li><li>Number of bedrooms</li><li>Number of bathrooms</li><li>Upgrades to kitchen</li><li>Window quality</li><li>Roof age</li><li>Lot features</li><li>Location; primary or neighborhood street?</li><li>Style of residence</li><li>Flooring type</li>"
    },
    {
      title: "Can I determine how much my home is worth from an internet website?",
      content: "The answer to this frequently asked question is NO!  Anyone who has bought a home, sold a home, or just looked at homes, has heard of websites such as Zillow and Trulia.  These are also commonly referred to as third party real estate websites.  Third party real estate websites are not local to every real estate market.<br><br>These third party real estate websites provide estimates of home values for practically any home in the United States.  How is it possible that a third party website that is headquartered in California or Florida can provide an accurate home value for a home located in Rochester, NY?  It’s not!  These third party websites, such as Zillow and Trulia, use computer generated home values based on calculations and formulas.<br><br>These websites providing inaccurate estimates (or “Zestimates”) can create a false sense of hope and lead to frustration.  A home seller who is told their home is worth $20,000 less than the online estimate is going to be understandably upset.  It’s critical that when selling a home, the value is determined by a top Realtor in your local area, not an internet website!"
    },
    {
      title: "Should I price my home higher to leave room for negotiations?",
      content: "This frequently asked question often leads to a common pricing mistake that sellers make.  Many sellers believe they should price their home $5,000 higher than what a top Realtor suggests to leave room for negotiations and low-ball offers.  A well priced home will sell quickly and will sell for close to the listing price.  There is no need to leave room for negotiations, as today’s home buyers are very well educated.  A seller who prices their home high to leave room for negotiations can actually be costing themselves more money than if they price it to reflect the suggested market value."
    },
    {
      title: "How long does the listing agreement last?",
      content: "Most of the frequently asked questions that relate to exclusive right to sell contracts are not able to be answered with a universal answer.  When it comes to the length of a listing agreement, every real estate agent will have a different preferred length.  One thing to keep in mind when asking about the length of a listing agreement is the average days on the market.  If the average days on the market in your local real estate market are 75, a 90 day listing agreement may not be enough."
    },
    {
      title: "How do I respond to low ball offers?",
      content: "When selling a home, it’s best to think of any decision as a business decision rather than an emotional one.  Low ball offers still happen, unfortunately.  Dealing with low ball offers can sometimes lead to the sale of a home, if handled properly.  The worse decision you can make if you receive a low ball offer is not responding.  Some home owners are so upset they decide they do not want to respond to a low ball offer, which ultimately ends any potential chance for a deal.  A counter offer, even if it’s close to the list price, is better than letting a potential buyer walk!"
    },
    {
      title: "What is a sale contingency?",
      content: "Some buyer’s decide when buying a home they would like to find a suitable property before selling their existing home.  A sale contingency is a common contingency that sellers see in purchase offers.  A sale contingency means that the potential buyer of a home must sell their existing home, before being able to purchase the “new” home."
    },
    {
      title: "How does the inspection phase work?",
      content: "Inspections are another common contingency that buyer’s make their purchase offers subject to.  There are many different types of inspections and tests that a buyer has the right to perform.  In most cases, inspections are at the expense of the buyer.  They have a specified number of days to complete the inspections and also a specified number of days to either remove the inspection contingencies or request the seller address findings from the inspections."
    }]
}

const styles = {
  bgColor: 'cod gray',
  titleTextColor: "orange",
  titleTextSize: "35px",
  titlePadding: "50px",
  rowTitleColor: "white",
  rowContentColor: 'grey',
  arrowColor: "white",
  rowTitlePaddingLeft: '150px',
  rowContentPaddingLeft: '50px',
  rowContentPaddingRight: '150px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  arrowColor: "white",
  transitionDuration: "0.5s",
  timingFunc: "ease"
};

const config = {
  animate: true,
  arrowIcon: "V",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

function SaleFAQ() {
  return (
    <>
      <Faq data={data} styles={styles} config={config}/>
      <Footer />
    </>
  )
}

export default SaleFAQ