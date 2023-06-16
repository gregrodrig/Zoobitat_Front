import { auto } from '@popperjs/core';
import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import "../../index.css"
import { Link } from 'react-router-dom';

export default class NoticiaCard extends Component {
    render() {
        const { imagen, titulo, texto, id } = this.props;

        return (
            <Card style={{ width: '100%', overflow: 'hidden' }}>
                <Card.Body>
                    <Row>
                        <Col xs={4}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <Card.Img src={imagen} alt="Imagen de la noticia" style={{ width: '100%', height: 'auto' }} />
                            </div>
                        </Col>
                        <Col xs={8}>
                            <Link to={`/Noticia/${id}`}>
                                <Card.Title style={{ color: 'var(--MediumGreen)' }}>{titulo}</Card.Title>
                            </Link>
                            
                            <p style={{ color: 'var(--Black)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>{texto}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );

    }
}
