import styled from 'styled-components';
import { space } from 'styled-system';
import media from 'styled-media-query';

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.header};
  font-size: 3.052em;
  letter-spacing: 1px;
  line-height: 1.45;
  margin: 0;
  ${space}

  ${media.lessThan('medium')`
    font-size: 1.563em;
    line-height: 1.3;
  `}
`;

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-size: 2.441em;
  letter-spacing: 1px;
  line-height: 1.45;
  margin: 0;
  ${space}

  ${media.lessThan('medium')`
    font-size: 1.563em;
  `}
`;

const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.953em;
  letter-spacing: 1px;
  line-height: 1.45;
  margin: 0;
  ${space}

  ${media.lessThan('medium')`
    font-size: 1.25em;
  `}
`;

const H4 = styled.h4`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.563em;
  letter-spacing: 1px;
  line-height: 1.45;
  margin: 0;
  ${space}
`;

const H5 = styled.h5`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.25em;
  letter-spacing: 1px;
  line-height: 1.45;
  margin: 0;
  ${space}
`;

export {
  H1, H2, H3, H4, H5,
};
