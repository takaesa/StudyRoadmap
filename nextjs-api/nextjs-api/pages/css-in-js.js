import styled from "styled-components"

const Title = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    margin: 20px 0;
    `

function CSSINJS() {
    return <Title>
        <h2 style={{ color: 'red' }}>CSS in JS </h2>

    </Title>
}

export default CSSINJS