import { parse } from 'node-html-parser';
import fetch from 'node-fetch';

const WebpageParser = {
    getParsedText: async (url) => {
        //const html: string = await fetch(url).then((x) => x.text());

        // const res = parse(html, {
        //     lowerCaseTagName: false, // convert tag name to lower case (hurt performance heavily)
        //     comment: false, // retrieve comments (hurt performance slightly)
            
        //     blockTextElements: {
        //         script: false, // keep text content when parsing
        //         noscript: false, // keep text content when parsing
        //         style: false, // keep text content when parsing
        //         pre: false, // keep text content when parsing
        //     },
        // });

        // return res
        //     .querySelectorAll('p')
        //     .map((el) => el.outerHTML)
        //     .toString();

        return `When we think of Amish people we think of a simple life, free of modern advancements.” So begins a viral article, called “Why the Amish Don’t Get Sick,” which seeks to prove that Americans would be healthier if they lived more like the midwestern Anabaptists. The piece appears to have its roots in a site called LA Healthy Living, but it has recently bounced its way across the naturopathic Internet, ending up on the domains of quack doctors and, more recently, on a hippie news site called Earth We Are One, through which it landed in my Facebook feed.
        Though it masquerades as “what we can learn from them”-style journalism, the piece is basically just catnip for the anti-GMO and anti-vax crowds. And sadly, it appears to have already spread its nonsense far and wide.
        “Most of us view [the Amish] as foolish for not using the advantages of convenient technology,” it reads, “and even look down on them for not conforming to the norms of mainstream society.” (Yeah, you know how people are always like: “iPads are so great; the Amish are a bunch of idiots for not using them.”)
        “But if we look at the statistics,” it continues, “the Amish are much healthier than the rest of America. They virtually have no cancer, no autism, and rarely get sick. What are they doing different from the rest of America?”
        The first tip, according to this article, is not getting vaccinated: “In spite of constant pressure from the government, the Amish still refuse to vaccinate.”
        Nope. Most Amish parents vaccinate, but even then, the relatively low overall vaccination rate in the community fueled a massive measles outbreak in Ohio’s Amish country earlier this year. The incident proved something that Amish and “English” parents alike should know by now: Vaccines don’t cause autism, but not getting a vaccine can cause outbreaks of nasty, 19th-century diseases.
        The rest of the items in the listicle aren’t as terrible. Being physically active, not getting too stressed out, and eating a lot of vegetables are all “Amish” habits the article says other Americans would do well to adopt. However, its suggestion that Amish food contains no GMOs is bunk—some Amish farms do use genetically modified crops for financial and efficiency reasons. Besides, there's no evidence that genetically modified foods are detrimental to human health in any way.
        But it’s the very premise of the article that’s bizarre. If you’re going to hype a community as “never getting sick,” use a place that’s actually remarkably healthy, like Minneapolis. Not only do Amish people get sick, they get some of the worst diseases in the world.
        Almost all of the roughly 250,000 Amish people in the U.S. can trace their roots back to a few hundred Swiss farmers who immigrated to Pennsylvania in the 18th century. The centuries of isolation and intermarriage has forged tight-knit communities, sure, but it has also caused widespread genetic problems.
        One example is Maple Syrup Urine Disease—so named for the smell of the sufferer’s urine and ear wax—which causes the body to be unable to metabolize protein. Most people with MSUD experience vomiting, seizures, and brain damage starting in infancy, and they die early.
        Only one out of every 180,000 babies in the general population is born with the disease, but it strikes one out of every 358 Amish babies. Treatment usually involves avoiding meat and dairy entirely—which is tough to manage in the “all-natural” Amish lifestyle. Liver transplants are another option, but few Amish can afford them.
        And that’s just one of the many virtually unheard-of genetic diseases that plague the Plain People.
        Granted, one study found that the Amish do have a lower incidence of seven types of cancer—mostly because they don’t drink, smoke, or have unprotected sex with lots of different partners. They also reduce their risk of skin cancer by wearing wide-brimmed hats and covering their bodies from ankle to wrist. But you don’t see “LA Healthy Living” trumpeting the health perks of bonnets.
        It’s`;

    }
};

export default WebpageParser;