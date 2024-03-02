import styled from 'styled-components';

export const FooterStyled = styled.div`
margin-top: 60px;
background-color: var(--primary-color-footer);


.footer-title {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.footer-logo {
    width: 100%;
    height: 60px;
    color: white;
}

.footer-text {
    color: var(--primary-color-white);
    font-size: 12px;
    font-weight: 300;
    line-height: 32px;
}

.footer-social-items {
    display: flex;
    gap: 10px;
}

.footer-social-svg {
    width: 32px;
    height: 32px;
}
`