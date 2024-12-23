import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: [
                "Welcome to SamarCrypto!",
                "Track Crypto Prices in Real-time",
                "Explore Trending Cryptocurrencies",
                "Save Your Favorites!",
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="text-2xl font-bold text-center mt-4">
            <span ref={typedElement}></span>
        </div>
    );
};

export default TypedText;
