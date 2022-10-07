const breakpointSm = '899px';
const breakpointXs = '480px';
const breakpointText = '1050px';
const breakpointCarousel = '700px';

const CssStyle = {
    navStyle: {
        flex: {
            flex: 1,
        },
        nav: {
            background: '#ffffff',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            boxShadow: 'none',
            borderBottom: '2px solid #f7f8fd'
        },
        buttonColor: {
            color: '#000000',
        },
        notification: {
            backgroundColor: '#ED6C02',
            color: '#ffffff',
            borderRadius: '40px',
            width: '25px',
            height: '25px',
            padding: ".5rem",
            marginTop: '-3.75rem',
            marginLeft: '-0.5rem'
        },
        color: {
            color: '#68707d',
            textDecoration: 'none'
        },
        dFlex: {
            display: 'flex',
            alignItems: 'center'
        },
        fdColumn: {
            display: 'flex',
            [`@media (max-width: ${breakpointSm})`]: { // eslint-disable-line no-useless-computed-key
                flexDirection: 'column',
            }
        },
        menu: {
            display: 'none',
            [`@media (max-width: ${breakpointSm})`]: { // eslint-disable-line no-useless-computed-key
                display: 'flex',
                alignItems: 'center'
            }
        },
        menuIcon: {
            color: '#68707d',
            fontSize: '2rem',
        },
        cartStyle: {
            flexDirection: 'column',
            item: {
                display: 'flex',
                gap: '.5rem'
            },
            check: {
                marginTop: '1rem',
                width: '100%'
            }
        }
    },
    carouselStyle: {
        imgBloc: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '3rem'
        },
        modalStyle: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '42%',
            outline: 'none',
            pt: 2,
            px: 4,
            pb: 3,
            [`@media (max-width: ${breakpointText})`]: { // eslint-disable-line no-useless-computed-key
                width: '55%'
            },
            [`@media (max-width: ${breakpointSm})`]: { // eslint-disable-line no-useless-computed-key
                width: '75%'
            }
        }
    },
    carouselMobileStyle: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        buttons: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            left: '0%',
            top: '30rem',
            width: '95%',
            padding: '2rem',
            [`@media (max-width: ${breakpointCarousel})`]: { // eslint-disable-line no-useless-computed-key
                top: '20rem'
            },
            [`@media (max-width: ${breakpointXs})`]: { // eslint-disable-line no-useless-computed-key
                top: '15rem',
                padding: '.5rem',
                overflow: 'hidden'
            }
        }
    },
    detailsStyle: {
        textBloc: {
            marginBlock: '5rem',
            [`@media (max-width: ${breakpointText})`]: { // eslint-disable-line no-useless-computed-key
                marginBlock: '0rem'
            }
        },
        typoColor: {
            color: '#68707d',
            fontSize: '16px'
        },
        priceBloc: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: '2rem',
            paddingBottom: '0.5rem',
            price: {
                fontSize: '24px',
                fontWeight: '700'
            },
            reduction: {
                color: '#ff7d1a',
                backgroundColor: '#ffede0',
                padding: '0.0875rem 0.325rem',
                borderRadius: '5px',
                fontWeight: '700',
                marginInline: '1rem',
            },
            priceReduction: {
                textDecoration: 'line-through',
                color: '#b6bcc8',
                fontSize: '18px',
                marginBottom: '2.5rem'
            }
        },
        buttonBloc: {
            display: 'flex',
            gap: '1rem',
            [`@media (max-width: ${breakpointSm})`]: { // eslint-disable-line no-useless-computed-key
                flexDirection: 'column',
                marginBottom: '2rem',
            },
            buttonGroup: {
                display: 'flex',
                alignItem: 'center',
                backgroundColor: '#f7f8fd',
                padding: ".75rem",
                button: {
                    fontSize: '25px',
                    fontWeight: 'bold',
                    width: '100%'
                },
                count: {
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '16px'
                }
            },
            text: {
                textTransform: 'lowercase',
                padding: '1rem 0rem 1rem 0rem',
                width: '60%',
                borderRadius: '.75rem',
                [`@media (max-width: ${breakpointSm})`]: { // eslint-disable-line no-useless-computed-key
                    width: '100%'
                }
            }
        },
        product: {
            display: 'none',
        }
    }
}

export default CssStyle