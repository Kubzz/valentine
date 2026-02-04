import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin)

const MainPanel = () => {

    const container = useRef(null);

    const textOne = useRef(null);
    const lineOne = useRef(null);
    const textTwo = useRef(null);
    const lineTwo = useRef(null);
    const textThree = useRef(null);

    useGSAP(() => {

        // Text 1: Undraw when it reaches top third
        gsap.to(textOne.current, {
            drawSVG: "0% 0%",
            scrollTrigger: {
                trigger: textOne.current,
                start: "top 33%",  // When text reaches top third
                end: "top 0%",     // Until it leaves viewport
                scrub: 1,
                markers: true
            }
        });

        const lineOneTl = gsap.timeline({
            scrollTrigger: {
                trigger: lineOne.current,
                    start: "top 66%",
                    end: "bottom 33%",
                    scrub: 1,
                    markers: true
                }
        });

        lineOneTl
            // Step 1: Draw the initial 10% segment
            .fromTo(lineOne.current,
                { drawSVG: "0% 0%" },
                { drawSVG: "0% 10%", duration: 0.2 }
            )
            // Step 2: Move the segment along the line
            .to(lineOne.current,
                { drawSVG: "90% 100%", duration: 0.8 }
            )
            .to(lineOne.current, 
                { drawSVG: "100% 100%", duration: 0.2 }
            );

        // Text 2: Draw when it reaches bottom third
        gsap.fromTo(textTwo.current,
            { drawSVG: "0% 0%" },
            {
                drawSVG: "0% 100%",
                scrollTrigger: {
                    trigger: textTwo.current,
                    start: "top 99%",   // When text enters bottom third
                    end: "top 66%",     // Until it reaches top third
                    scrub: 1,
                    markers: true
                }
            }
        );

        gsap.to(textTwo.current, {
            drawSVG: "0% 0%",
            scrollTrigger: {
                trigger: textTwo.current,
                start: "top 33%",  // When text reaches top third
                end: "top 0%",     // Until it leaves viewport
                scrub: 1,
                markers: true
            }
        });

        const lineTwoTl = gsap.timeline({
            scrollTrigger: {
                trigger: lineTwo.current,
                    start: "top 66%",
                    end: "bottom 33%",
                    scrub: 1,
                    markers: true
                }
        });

        lineTwoTl
            // Step 1: Draw the initial 10% segment
            .fromTo(lineTwo.current,
                { drawSVG: "0% 0%" },
                { drawSVG: "0% 10%", duration: 0.2 }
            )
            // Step 2: Move the segment along the line
            .to(lineTwo.current,
                { drawSVG: "90% 100%", duration: 0.8 }
            )
            .to(lineTwo.current, 
                { drawSVG: "100% 100%", duration: 0.2 }
            );

        // Text 3: Draw when it reaches bottom third
        gsap.fromTo(textThree.current,
            { drawSVG: "0% 0%" },
            {
                drawSVG: "0% 100%",
                scrollTrigger: {
                    trigger: textThree.current,
                    start: "top 99%",   // When text enters bottom third
                    end: "top 66%",     // Until it reaches top third
                    scrub: 1,
                    markers: true
                }
            }
        );

    }, { scope: container });


    //<text ref={one} y="50" fill="blue" fontSize="24">Happy Valentines Day Faye</text>
    //<text y="50" fill="blue" fontSize="24">I Love You</text>
    //<text y="50" fill="blue" fontSize="24">Heart / Pictures</text>

    return (  
        <div ref={container} style={{ backgroundColor: '#1a1a1a' }}>
        
            {/* Text 1 - starts fully visible */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="600" height="200" viewBox="0 0 600 200">
                <path
                    ref={textOne}
                    d="M 50 100 L 550 100"
                    stroke="#ff6b6b"
                    strokeWidth="4"
                    fill="none"
                />
                </svg>
            </div>

            {/* Line 1 - connecting line */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="400" height="600" viewBox="0 0 400 600">
                <path
                    ref={lineOne}
                    d="M 200 50 Q 200 300 200 550"
                    stroke="#4ecdc4"
                    strokeWidth="4"
                    fill="none"
                />
                </svg>
            </div>

            {/* Text 2 - starts invisible, draws in */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="600" height="200" viewBox="0 0 600 200">
                <path
                    ref={textTwo}
                    d="M 50 100 L 550 100"
                    stroke="#f7b731"
                    strokeWidth="4"
                    fill="none"
                />
                </svg>
            </div>
            {/* Line 2 - connecting line */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="400" height="600" viewBox="0 0 400 600">
                <path
                    ref={lineTwo}
                    d="M 200 50 Q 200 300 200 550"
                    stroke="#4ecdc4"
                    strokeWidth="4"
                    fill="none"
                />
                </svg>
            </div>

            {/* Text 3 - starts fully visible */}
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="600" height="200" viewBox="0 0 600 200">
                <path
                    ref={textThree}
                    d="M 50 100 L 550 100"
                    stroke="#ff6b6b"
                    strokeWidth="4"
                    fill="none"
                />
                </svg>
            </div>

        </div>
    )
}

export default MainPanel;