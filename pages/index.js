import Head from "next/head";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";

export default function Home() {
    const [selectedOpt, setSelectedOpt] = useState("daily");
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
            <main className="max-w-[90%] mx-auto ">
                <ProfileCard
                    selectedOpt={selectedOpt}
                    setSelectedOpt={setSelectedOpt}
                />

                <section className="grid gap-4">
                    <StatsCard
                        icon="/images/icon-work.svg"
                        bg="bg-lightred_work"
                    />
                    <StatsCard icon="/images/icon-play.svg" bg="bg-softblue" />

                    <StatsCard
                        icon="/images/icon-study.svg"
                        bg="bg-lightred_study"
                    />
                    <StatsCard
                        icon="/images/icon-exercise.svg"
                        bg="bg-limegreen"
                    />

                    <StatsCard icon="/images/icon-social.svg" bg="bg-violet" />

                    <StatsCard
                        icon="/images/icon-self-care.svg"
                        bg="bg-softorange"
                    />
                </section>
            </main>
        </>
    );
}
