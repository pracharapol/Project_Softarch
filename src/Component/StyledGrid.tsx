import { Row as RGSRow, Col as RGSCol, Container as RGSContainer } from 'react-grid-system';

export const Row = (props: any) => <RGSRow style={{ marginBottom: '20px' }} {...props} />;
export const Col = (props: any) => <RGSCol style={{ marginBottom: '20px' }} {...props} />;
export const Container = (props: any) => <RGSContainer style={{ marginBottom: '40px' }} {...props} />;

export default {
  Row, Col, Container,
};