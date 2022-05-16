import classes from './Learn.module.css';
import { Row, Col, Image } from 'react-bootstrap';
import Card, { CardBgColor, CardBorderRadius } from '../../Card';
import Button, { ButtonColor } from '../../Button';
import outletsImg from '../../../assets/learn page/outlets.png';
import auctionImg from '../../../assets/learn page/auction.png';
import auctionFullImg from '../../../assets/learn page/auction_full.png';
import communityImg from '../../../assets/learn page/community.png';
import clsx from 'clsx';
import { useAppSelector } from '../../../hooks';
import defaultBrowseToAuctionId from '../../../utils/defaultBrowseToAuctionId';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const browseToAuctionId = useAppSelector((state) =>
    defaultBrowseToAuctionId(state.propHouse.auctions)
  );
  const navigate = useNavigate();

  return (
    <>
      <div className={clsx('break-out', classes.breakOutMobile)}>
        <Row className={clsx('g-0', classes.row, 'justify-content-start')}>
          <Col
            xl={{ span: 5 }}
            xs={{ order: 'first' }}
            className={classes.leftCol}
          >
            <Image src={outletsImg} fluid className={classes.img} />
          </Col>
          <Col xl={{ span: 5, offset: 1 }} xs={{ order: 'last' }}>
            <h2>Supercharge your community</h2>
            <p>
              NFT communities have eager members who want to build for their
              communities. Prop House makes it easy for communities to quickly
              and fairly deploy their capital in order to capture the energy of
              their builders.
            </p>
            <Button
              text="Explore houses"
              bgColor={ButtonColor.Pink}
              classNames={classes.firstBtn}
              onClick={() => {
                navigate(`/explore`);
              }}
            />
          </Col>
        </Row>
      </div>

      <div className={clsx('break-out', classes.breakOutMobile)}>
        <Row className={clsx('g-0', classes.row)}>
          <Col
            xl={{ span: 4, offset: 1, order: 'first' }}
            xs={{ order: 'last' }}
          >
            <Col xs={12}>
              <h2>Capture ideas with your own Prop House</h2>
            </Col>
            <Col xs={12}>
              <p>
                Communities propose and vote on ideas via Funding Rounds held in
                their Prop House. Funding rounds are auctions where the thing
                being auctioned is ETH and the bids being placed are proposals.
                Anyone is free to propose anything.
                <br />
                <br />
                At the end of each auction, members of the Nouns ecosystem vote
                on which proposal will receive funding.
              </p>
            </Col>
          </Col>
          <Col
            xl={{ span: 6, offset: 1 }}
            xs={{ order: 'first' }}
            className={classes.rightCol}
          >
            <Image
              src={auctionImg}
              fluid
              className={clsx(classes.img, classes.auctionImg)}
            />
            <Image
              src={auctionFullImg}
              fluid
              className={clsx(classes.img, classes.auctionFullImg)}
            />
          </Col>
        </Row>
      </div>

      <div className={clsx('break-out', classes.breakOutMobile)}>
        <Row className={clsx('g-0', classes.row, 'justify-content-start')}>
          <Col xl={5} xs={{ order: 'last' }} className={classes.leftCol}>
            <Image src={communityImg} fluid className={classes.img} />
          </Col>
          <Col xl={{ span: 5, offset: 1 }} xs={{ order: 'last' }}>
            <h2>
              Bring your community together by <i>building</i> together
            </h2>
            <p>
              NFTs have enabled a new class of community. One that not only
              comes together because of shared ideas but also ones that are able
              to transact, transform and create value. Prop House is the
              permissionless ETH power source that communities build around.
            </p>
          </Col>
        </Row>
      </div>

      <Card
        bgColor={CardBgColor.White}
        borderRadius={CardBorderRadius.twenty}
        classNames={classes.cardCTA}
      >
        <Row className={classes.ctaRow}>
          <Col xl={9}>
            <h2>The easiest way to get funded</h2>
            <p>All you need is an Ethereum wallet and a nounish idea.</p>
          </Col>
          <Col xl={3}>
            <Button
              text="Browse rounds"
              bgColor={ButtonColor.Pink}
              onClick={() => {
                navigate(`/auction/${browseToAuctionId}`);
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Learn;
