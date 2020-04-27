# The problem: Fake news

**Fake news is a problem for people trying to understand the Covid-19 epidemic.** Everyone has an opinion on the Covid-19 epidemic, and everyone wants to share their thoughts. In addition, there are a number of sites that publish false information about Covid-19. Some of these are just misinformed, some are malicious; but all should be ignored by people trying to find and act on reliable information.

**The trouble is that it can be very hard to know whether some particular story or article is from a reliable source, especially if the person hasn't come across that source before.** People need some way of easily determining whether some source of news is reliable or not.

That's where [Factually](https://factually.dev/) comes in.

# Our solution

![Architecture of Factually](//challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/061/969/datas/gallery.jpg)

**[Factually](https://factually.dev/) is an easy-to-use tool that allows people to rapidly and simply check the trustworthiness of a website.** When someone comes across a new site, Factually can inform them if that site is generally to be trusted or not. It does this with a simple thumbs-up or thumbs-down response that is quick and easy for people to understand. That will allow people to exercise their judgement on whether to believe what they see and read. 

**We make these judgements by crawling the web, finding sites that contain coronavirus information and the sites they link to, and evaluating how trustworthy each site is.** Our judgement is based on some "fixed points" on the web that are known to be sources of good information or fake news. Our evaluations are freely available, allowing the widest possible use of our contribution.

# How it works

**The core of Factually is a database of websites, together with our judgements of their trustworthiness. This information is made available in several ways.**

People can visit the [Factually](https://factually.dev/) website and ask Factually about a site. The website responds with a simple thumbs up or thumbs down response, indicating whether we think that site is trustworthy or not. 

The data is also available via an API, making it usable in other tools. A browser extension could use the information to annotate links on a page with a signal of whether the link goes to a trustworthy or untrustworthy. Other websites could access the information, whether to ensure they're not they're linking to fake news, or to signal the trustworthiness of sites to their visitors.

## Calculating trustworthiness

The calculation of trustworthiness uses a variation of the [PageRank algorithm](https://en.wikipedia.org/wiki/PageRank) to make trustworthiness judgements of sites. 

We start with a **curated list of sites** that are known to be either authoritative sources of trustworthy information (such as the [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en)) or are known to be sources of fake and untrustworthy misinformation (such as `4chan`). Our algorithm uses the link structure of the web to make trustworthiness judgements about other sites. 

If a trusted site links to another site, we can take that as evidence that the destination site is trusted by the source, and therefore should be considered trustworthy. Conversely, if a known untrusted site links out, we should consider _that_ destination site to be less trustworthy than others. 

That's the core of our calculation. We use our evaluations of trustworthiness of some sites to inform our judgements of other sites. Sites that link to each other reinforce our judgements. A more detailed description of our approach is available on the [project home page](https://github.com/concrete-wow/concrete-wow-back/blob/master/README.md).

## Technical description

Factually comprises several parts: a database, a web crawler, a trustworthiness engine, an API handler, and a web-based front end.

![Architecture of Factually](//challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/061/684/datas/gallery.jpg)

* The **database** stores information about the sites we've examined, including fixed and calculated trustworthiness scores.
* The **web crawler** periodically goes off and finds new sites to include in the database
* The **trustworthiness engine** combines the trustworthiness of curated sites and the link structure to calculate trustworthiness scores for all sites.
* The **API handler** makes the information available for several uses.
* The **web-based front end** is a React one-page app that provides an easy-to-use interface to the Factually trustworthiness judgements.

# Next steps 

We've assembled a proof-of-concept system at [factually.dev](https://factually.dev/). All the parts described above are working. We have a large (but not exhaustive) list of sites known to be either trustworthy or untrustworthy.

Our next steps include:

1. Developing a browser plug-in to present Factually judgements directly in a user's browsing experience
2. Extending the list of curated sites, to give better information for our trustworthiness calculations
3. Evaluating the trustworthiness calculations to determine how reliable and useful they are, including fine-tuning the thresholds we sue for reporting status to users.
4. More robust engineering of the component parts, including hosting providers.

# Sustainability

Factually is fairly autonomous and requires little day-to-day maintenance. At present, the service runs on free and cheap tiers of hosting. When Factually becomes more widely used, we will seek charitable funding to support Factually. (Ad-based funding would introduce a significant potential conflict-of-interest in the ongoing maintenance and development of the site.)

# Post-Covid-19 benefit

Fake news has been a significant problem for several years before Covid-19 arrived. Factually is able to address fake news in many contexts.

The current database contains sites related to Covid-19 information and is therefore tuned to give judgements about Covid-19. A different set of curated sites, and a different set of crawled sites, would allow Factually to make judgements in a different domain. If Factually were seeded with a wide range of sites of general interest, Factually could be useful as a general-purpose fake news defence.

# Conclusion

Factually addresses the problem of fake news by automatically forming judgements about the trustworthiness of sites across the web. Those judgements are made available to users in an easy-to-understand form. The judgements are based on a manually-curated list of sites that are known to be either trustworthy or not. We have developed a prototype version of Factually that is available for use.