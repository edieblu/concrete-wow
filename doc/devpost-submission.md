# Goal

We aim to produce is a web page reputation system targeted at evaluating websites that purport to give advice about Coronavirus health topics. This will be a positive reputation system aimed at enumerating goodness, i.e. sites that have some trail of authenticity back to a site that is considered good. We are not aiming at enumerating badness, only goodness. At a binary level, the system will deliver either: “yes we know about this site, it is probably OK”, or “we know nothing about this site, caution”

Sites like public health services and major reputable news organisations, as well as other industry or social response organizations can be authoritative, although individually limited in scope. We will produce a system that uses links between and from authoritative sites to gauge an ecosystem of known “good” sources. This will allow us to assess the probability of a given page promoting safe information by determining the number and directness of inbound links from known authoritative “seed” sites. In effect, this is very similar to the original Google PageRank system for search but targeted at very specific tight subject areas where effective and strong inferences can be made based on linkage from canonical sites.

While this implementation is targeted at Covid-19 information, we will be producing a system that is open and can rank the reputation of websites about any implementation-specific topics depending on the authoritative initial seed sites and parameters chosen by the hoster.

We will then make access to this information available in a number of ways:

Via an API: post a URL, get back an authority probability score (this may be useful to other teams at the Hackathon!)
Simple Web page: type in a URL, get back a human readable score and reasons
Via a browser plugin that produces a banner for (possibly) unsafe sites.
