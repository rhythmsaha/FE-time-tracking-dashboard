import Head from "next/head";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";

export default function Home({ data }) {
    const [selectedOpt, setSelectedOpt] = useState("weekly");

    console.log(data);

    return (
        <>
            <Head>
                <title>Frontend Mentor | Time tracking dashboard</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="./images/favicon-32x32.png"
                />
            </Head>
            <main className="flex flex-col justify-between min-h-screen">
                <div className="w-[90%] max-w-screen-lg mx-auto flex flex-col gap-8 lg:flex-row justify-center mt-[5vh] lg:mt-[20vh] mb-[5vh]">
                    <div className="min-w-[260px] h-full">
                        <ProfileCard
                            selectedOpt={selectedOpt}
                            setSelectedOpt={setSelectedOpt}
                        />
                    </div>

                    <section className="grid gap-4 w-full  lg:grid-cols-3 body-min">
                        {data.map((d, i) => (
                            <StatsCard
                                key={i}
                                title={d.title}
                                prev={
                                    (selectedOpt === "daily" && "Last Day") ||
                                    (selectedOpt === "weekly" && "Last Week") ||
                                    (selectedOpt === "monthly" && "Last Month")
                                }
                                timeframe={
                                    (selectedOpt === "daily" &&
                                        d.timeframes.daily) ||
                                    (selectedOpt === "weekly" &&
                                        d.timeframes.weekly) ||
                                    (selectedOpt === "monthly" &&
                                        d.timeframes.monthly)
                                }
                                bgProp={
                                    (d.title === "Work" && {
                                        icon: "/images/icon-work.svg",
                                        bg: "bg-lightred_work",
                                    }) ||
                                    (d.title === "Play" && {
                                        icon: "/images/icon-play.svg",
                                        bg: "bg-softblue",
                                    }) ||
                                    (d.title === "Study" && {
                                        icon: "/images/icon-study.svg",
                                        bg: "bg-lightred_study",
                                    }) ||
                                    (d.title === "Exercise" && {
                                        icon: "/images/icon-exercise.svg",
                                        bg: "bg-limegreen",
                                    }) ||
                                    (d.title === "Social" && {
                                        icon: "/images/icon-social.svg",
                                        bg: "bg-violet",
                                    }) ||
                                    (d.title === "Self Care" && {
                                        icon: "/images/icon-self-care.svg",
                                        bg: "bg-softorange",
                                    })
                                }
                            />
                        ))}
                    </section>
                </div>
                <div class="h-20 flex justify-center items-center space-x-1 text-paleblue opacity-80 text-xs">
                    <span>Challenge by </span>
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        className="text-violet "
                    >
                        Frontend Mentor
                    </a>
                    .<span>Coded by</span>
                    <a href="#" className="text-violet">
                        Rhythm Saha
                    </a>
                    .
                </div>
            </main>
        </>
    );
}

export async function getStaticProps(context) {
    const resData = [
        {
            title: "Work",
            timeframes: {
                daily: {
                    current: 5,
                    previous: 7,
                },
                weekly: {
                    current: 32,
                    previous: 36,
                },
                monthly: {
                    current: 103,
                    previous: 128,
                },
            },
        },
        {
            title: "Play",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 2,
                },
                weekly: {
                    current: 10,
                    previous: 8,
                },
                monthly: {
                    current: 23,
                    previous: 29,
                },
            },
        },
        {
            title: "Study",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 1,
                },
                weekly: {
                    current: 4,
                    previous: 7,
                },
                monthly: {
                    current: 13,
                    previous: 19,
                },
            },
        },
        {
            title: "Exercise",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 1,
                },
                weekly: {
                    current: 4,
                    previous: 5,
                },
                monthly: {
                    current: 11,
                    previous: 18,
                },
            },
        },
        {
            title: "Social",
            timeframes: {
                daily: {
                    current: 1,
                    previous: 3,
                },
                weekly: {
                    current: 5,
                    previous: 10,
                },
                monthly: {
                    current: 21,
                    previous: 23,
                },
            },
        },
        {
            title: "Self Care",
            timeframes: {
                daily: {
                    current: 0,
                    previous: 1,
                },
                weekly: {
                    current: 2,
                    previous: 2,
                },
                monthly: {
                    current: 7,
                    previous: 11,
                },
            },
        },
    ];

    return {
        props: {
            data: resData,
        },
    };
}
