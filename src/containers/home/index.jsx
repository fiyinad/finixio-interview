import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import axios from 'axios';

import CoinSelector from '../../components/coinSelector/index';
import { cryptocurrencies } from '../../cryptocurrencies';
import * as actionTypes from '../../store/actions';

const home = props => {
    const [coins, setCoins] = useState(props.coins);

    useEffect(() => {
        setCoins(props.coins);
    }, [props.coins])

    const onAddUpdateCurrencyHandler = e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${formDataObj.currency}&tsyms=USD`)
            .then(res => {
                if (200 == res.status) {
                    const coin = {
                        name: formDataObj.currency,
                        currentPrice: res.data.RAW[formDataObj.currency.toString().toUpperCase()].USD.PRICE,
                        openingPrice: res.data.RAW[formDataObj.currency.toString().toUpperCase()].USD.OPENDAY
                    }
                    props.onCoinAddOrUpdate(coin);
                } else {
                    console.error(res);
                }
            }).catch(error => {
                console.error(error);
            })
    };

    return (
        <Container>
            <Row>
                <Col sm="12">
                    <CoinSelector coinList={cryptocurrencies} addUpdateCoinHandler={onAddUpdateCurrencyHandler} />
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Coin Name</th>
                                <th>Current Price (USD)</th>
                                <th>Opening Price (USD)</th>
                                <th>Price Increase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map(el =>
                                (
                                    <tr key={el.name}>
                                        <td>{el.name}</td>
                                        <td>{el.currentPrice}</td>
                                        <td>{el.openingPrice}</td>
                                        <td>{el.priceIncrease}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        coins: state.coins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCoinAddOrUpdate: coin => dispatch({ type: actionTypes.ADD_OR_UPDATE_COIN, payload: { ...coin } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);