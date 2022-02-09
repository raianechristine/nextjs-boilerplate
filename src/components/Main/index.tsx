import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Image of an atom and advanced react written on the side"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration
        src="/img/hero-illustration.svg"
        alt="Developer in front of a screen with code"
      />
    </S.Wrapper>
  )
}

export default Main
