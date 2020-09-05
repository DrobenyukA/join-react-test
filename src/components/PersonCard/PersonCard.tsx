import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

interface Props {
    name?: string;
    image?: string;
    title?: string;
    subtitle?: string;
}

const PersonCardName = styled.p`
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.primaryTextColor};
    font-size: 1.35rem;
    font-weight: bold;
`;

const PersonCardText = styled.p`
    margin-bottom: 0.15rem;
`;

const PersonAvatar = styled.img`
    display: block;
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.125);
`;

const PersonCard = ({ name = 'Unnamed', image = '', title, subtitle, ...props }: Props) => {
    const handleImageNotFound = React.useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
        const image = e.target as HTMLImageElement;
        if (image.src.includes('no-avatar.pnd')) {
            return;
        }
        image.src = '/no-avatar.png';
    }, []);
    return (
        <Container fluid={true} {...props}>
            <Row>
                <Col xs="3">
                    <PersonAvatar src={image} alt={`Avatar for ${name}`} onError={handleImageNotFound} />
                </Col>
                <Col xs="9">
                    {title && <PersonCardText>{title}</PersonCardText>}
                    <PersonCardName>{name}</PersonCardName>
                    {subtitle && <PersonCardText>{subtitle}</PersonCardText>}
                </Col>
            </Row>
        </Container>
    );
};

export default PersonCard;
