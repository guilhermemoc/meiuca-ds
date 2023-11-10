import React, { useEffect, useState } from 'react';
import ButtonPrimary from '../Button';
import HeadingSmall from '../HeadingSmall';
import Paragraph from '../Paragraph';
import Shape from '../Shape';
import SubtitleSmall from '../SubtitleSmall';
import { CardContentProps } from './types';

function CardContent({ title, description, author, url }: CardContentProps) {
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

    const marginBottomTitle = designTokens?.spacing?.size?.xxxs?.value;
    const marginBottomSubtitle = designTokens?.spacing?.size?.xxs?.value;
    const marginBottomParagraph = designTokens?.spacing?.size?.sm?.value;

    return (
        <Shape>
            <HeadingSmall marginBottom={marginBottomTitle}>{title}</HeadingSmall>
            <SubtitleSmall marginBottom={marginBottomSubtitle}>{author}</SubtitleSmall>
            <Paragraph marginBottom={marginBottomParagraph}>{description}</Paragraph>
            <ButtonPrimary children={'Ver noticia'} url={url} />
        </Shape>
    );
}


export default CardContent;
