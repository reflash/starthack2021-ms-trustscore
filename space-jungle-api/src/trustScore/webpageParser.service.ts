import { parse } from 'node-html-parser';
import fetch from 'node-fetch';
import * as fs from 'fs';
import * as pth from 'path';

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

        return `# Breast cancer overtakes lung as most common cancer-WHO

        By Reuters Staff
        
        2 MIN READ
        
        GENEVA, Feb 2 (Reuters) - Breast cancer has overtaken lung cancer as the most common form of the disease, the World Health Organisation said on Tuesday.
        
        “For the first time, breast cancer now constitutes the most commonly occurring cancer globally,” Andre Ilbawi, a cancer specialist at the WHO, told a U.N. briefing ahead of World Cancer Day on Thursday.
        
        Lung cancer was the most common type for the last two decades, but is now in second place, ahead of colorectal cancer, which is the third most widespread, Ilbawi said.
        
        Ilbawi noted that obesity in women was a common risk factor in breast cancer, and is also driving overall cancer numbers.
        
        As the global population grows and life expectancy increases, cancer is expected to become more common, rising to about 30 million new cases per year in 2040 from 19.3 million in 2020, Ilbawi said.
        
        The coronavirus pandemic is disrupting cancer treatment in about half the countries it surveyed, Ilbawi said, pointing to delays in diagnosis, healthcare workers being under extreme stress and research being impacted. (Reporting by Emma Thomasson and Stephanie Nebehay; editing by Alexandra Hudson)`;

    }
};

export default WebpageParser;