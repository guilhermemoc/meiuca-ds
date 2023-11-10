import React, { useEffect, useState } from "react";
import HeadingSmall from "../HeadingSmall";
import Shape from "../Shape";

function Header() {
    const [designTokens, setDesignTokens] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/design-tokens.json');
                const tokens = await response.json();
                setDesignTokens(tokens);
            } catch (error) {
                console.error('Erro ao carregar tokens:', error);
            }
        };

        fetchData();
    }, []);

    if (!designTokens || Object.keys(designTokens).length === 0) {
        return null;
    }
    return (
        <Shape backgroundColor={designTokens.neutral.color[1].value} borderColor={designTokens.neutral.color[1].value}>
            <HeadingSmall color={designTokens.neutral.color[5].value}>Meiuca News</HeadingSmall>
        </Shape >
    )
}

export default Header;