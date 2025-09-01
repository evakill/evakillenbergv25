"use client";

import React, { createContext, useContext, useState } from "react";
import { Thumbnail } from "./types";
import { getThumbnailsFromParams } from "./utils";
import { useParams } from "next/navigation";
import { tree } from "./tree-content";

type ThumbnailsContextType = {
    thumbnails: Thumbnail[];
    setThumbnails: React.Dispatch<React.SetStateAction<Thumbnail[]>>;
    squareDimensionPx: number;
};

const ThumbnailsContext = createContext<ThumbnailsContextType | undefined>(undefined);

export const ThumbnailsProvider = ({ children }: { children: React.ReactNode }) => {
    const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
    const [squareDimensionPx, setSquareDimensionPx] = React.useState(0);

    const params = useParams()

    React.useEffect(() => {
        const newThumbnails = getThumbnailsFromParams(tree, params);
        setThumbnails(newThumbnails);
    }, [params, setThumbnails]);

    // Window resize handler
    React.useEffect(() => {
        const handleResize = () => {
            // Update thumbnail sizes or positions based on new window size
            setSquareDimensionPx(Math.min(window.innerHeight, window.innerWidth));
        };
        // Set initial size if viewport has loaded
        setSquareDimensionPx(Math.min(window.innerHeight, window.innerWidth));
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ThumbnailsContext.Provider value={{ thumbnails, setThumbnails, squareDimensionPx }}>
            {children}
        </ThumbnailsContext.Provider>
    );
};

export const useThumbnails = () => {
    const context = useContext(ThumbnailsContext);
    if (!context) throw new Error("useThumbnails must be used within a ThumbnailsProvider");
    return context;
};