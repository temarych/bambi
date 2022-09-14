import styled from "styled-components";
import photo from "../assets/bambi.png";
import YearMarker from "./YearMarker";

const MovieShowcase = () => {
  return (
    <MovieShowcase.Wrapper>
      <MovieShowcase.Header>
        <MovieShowcase.Image src={photo} />
        <MovieShowcase.InfoWrapper>
          <MovieShowcase.Title>
            <MovieShowcase.Name>
              Бембі
            </MovieShowcase.Name>
            <YearMarker year="1946" />
          </MovieShowcase.Title>
          <MovieShowcase.Subtitle>
            П'ятий за рахунком класичний мультфільм Волта Діснея
          </MovieShowcase.Subtitle>
        </MovieShowcase.InfoWrapper>
      </MovieShowcase.Header>
      <MovieShowcase.Container>
        <MovieShowcase.Description>
          Мультфільм розпочинається з народження нового Принца лісу — оленятка <b>Бембі</b>. 
          Разом зі своїми першими друзями — <b>Топотуном</b> і його сестрами — він вчиться 
          ходити, говорити і знайомиться з іншими мешканцями лісу. Несподіваній 
          для нього стає зустріч з <b>Феліно</b> — маленькою оленихою, яка вважає спілкування 
          з Бембі дуже цікавим і веселим. <b>Бембі</b>, проте, зовсім не розділяє радості Фелін. 
          Намагаючись наздогнати настирливу знайому, Бембі зустрічається зі своїм 
          батьком — <b>Великим Князем лісу</b> — найповажнішим оленем у всьому лісі. 
        </MovieShowcase.Description>
      </MovieShowcase.Container>
    </MovieShowcase.Wrapper>
  );
}

MovieShowcase.Name = styled.h1`
  margin: 0;
`;

MovieShowcase.Subtitle = styled.h2`
  font-weight: normal;
  font-size: 1.4em;
  margin: 0;
`;

MovieShowcase.InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5em;
`;

MovieShowcase.Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  margin: 0;
`;

MovieShowcase.Description = styled.p`
  font-size: 1.3em;
  line-height: 1.5em;
  margin: 0;
`;

MovieShowcase.Header = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  gap: 2em;
`;

MovieShowcase.Container = styled.div`

`;

MovieShowcase.Image = styled.img`
  border-radius: 2em;
  width: 100%;
`;

MovieShowcase.Wrapper = styled.div`
  max-width: 40em;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
`;

export default MovieShowcase;