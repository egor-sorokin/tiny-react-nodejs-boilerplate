import styled from 'styled-components';


export const FlexDiv = styled.div`
    display: flex;
`;

export const FlexColumn = FlexDiv.extend`
    flex-direction: column;
`;

export const FlexRow = FlexDiv.extend`
    flex-direction: row;
`;

export const TextTruncated = styled.div`
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
`;
