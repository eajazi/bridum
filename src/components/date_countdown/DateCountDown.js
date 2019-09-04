import React from 'react';
import CircleProgress from '../circle_progress/CircleProgress';
import { Row, Col } from 'react-bootstrap';
import Countdown from 'react-countdown-now';
import Completionist from '../completionist/Completionist';

const weddingDateTime = 'Sat, 08 Jun 2019 16:00';

class DateCountDown extends React.Component {
  // circle variables
  circleSize = '100%';
  circleLineWidth = '16';
  circleProgressColor = '#212121';
  circleBgColor = '#9E9E9E';
  circleTextColor = '#212121';
  font = 'bold 6rem Raleway, sans-serif';

  getDaysUntil = () => {
    let dateToday = new Date();
    let dateUntil = new Date(weddingDateTime);

    let timeDiff = Math.abs(dateToday.getTime() - dateUntil.getTime());

    let dayDifference = Math.round(timeDiff / (1000 * 3600 * 24));

    return dayDifference;
  };
  // Renderer callback with condition
  renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    this.getDaysUntil(weddingDateTime);

    if (completed) {
      return <Completionist />;
    }

    return (
      <div>
        <Row>
          <Col md={5} lg={{ span: 2, offset: 4 }} xl={{ span: 3, offset: 4 }}>
            <hr />
          </Col>

          <Col md={7} lg={6} xl={5}>
            <h4>do vjenčanja još</h4>
          </Col>
        </Row>

        <Row
          className="justify-content-md-center countdown-container"
          noGutters={true}
        >
          <Col xs={6} md={3} lg={{ span: 2, offset: 4 }}>
            <Row>
              <Col className="countdown-single-circle">
                <CircleProgress
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" // String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={this.circleSize} // String: Defines the size of the circle.
                  lineWidth={this.circleLineWidth} // String: Defines the thickness of the circle's stroke.
                  text={this.getDaysUntil()}
                  progress={(this.getDaysUntil() / 365) * 100} // String: Update to change the progress and percentage.
                  progressColor={this.circleProgressColor} // String: Color of "progress" portion of circle.
                  bgColor={this.circleBgColor} // String: Color of "empty" portion of circle.
                  textColor={this.circleTextColor} // String: Color of percentage text color.
                  textStyle={{
                    font: this.font // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={false} // Boolean: Rounded/Flat line ends
                />
              </Col>
            </Row>
            <Row className="text-center countdown-circle-title">
              <Col>
                <h5>dana</h5>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={3} lg={2}>
            <Row>
              <Col className="countdown-single-circle">
                <CircleProgress
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" // String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={this.circleSize} // String: Defines the size of the circle.
                  lineWidth={this.circleLineWidth} // String: Defines the thickness of the circle's stroke.
                  text={hours}
                  progress={(hours / 24) * 100} // String: Update to change the progress and percentage.
                  progressColor={this.circleProgressColor} // String: Color of "progress" portion of circle.
                  bgColor={this.circleBgColor} // String: Color of "empty" portion of circle.
                  textColor={this.circleTextColor} // String: Color of percentage text color.
                  textStyle={{
                    font: this.font // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={false} // Boolean: Rounded/Flat line ends
                />
              </Col>
            </Row>

            <Row className="text-center countdown-circle-title">
              <Col>
                <h5>sata</h5>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={3} lg={2}>
            <Row>
              <Col className="countdown-single-circle">
                <CircleProgress
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" // String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={this.circleSize} // String: Defines the size of the circle.
                  lineWidth={this.circleLineWidth} // String: Defines the thickness of the circle's stroke.
                  text={minutes}
                  progress={(minutes / 60) * 100} // String: Update to change the progress and percentage.
                  progressColor={this.circleProgressColor} // String: Color of "progress" portion of circle.
                  bgColor={this.circleBgColor} // String: Color of "empty" portion of circle.
                  textColor={this.circleTextColor} // String: Color of percentage text color.
                  textStyle={{
                    font: this.font // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={false} // Boolean: Rounded/Flat line ends
                />
              </Col>
            </Row>

            <Row className="text-center countdown-circle-title">
              <Col className="countdown-single-circle">
                <h5>minuta</h5>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={3} lg={2}>
            <Row>
              <Col className="countdown-single-circle">
                <CircleProgress
                  animate={true} // Boolean: Animated/Static progress
                  animationDuration="1s" // String: Length of animation
                  responsive={false} // Boolean: Make SVG adapt to parent size
                  size={this.circleSize} // String: Defines the size of the circle.
                  lineWidth={this.circleLineWidth} // String: Defines the thickness of the circle's stroke.
                  text={seconds}
                  progress={(seconds / 60) * 100} // String: Update to change the progress and percentage.
                  progressColor={this.circleProgressColor} // String: Color of "progress" portion of circle.
                  bgColor={this.circleBgColor} // String: Color of "empty" portion of circle.
                  textColor={this.circleTextColor} // String: Color of percentage text color.
                  textStyle={{
                    font: this.font // CSSProperties: Custom styling for percentage.
                  }}
                  percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                  roundedStroke={false} // Boolean: Rounded/Flat line ends
                />
              </Col>
            </Row>

            <Row className="text-center countdown-circle-title">
              <Col>
                <h5>sekunda</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  };

  render() {
    return <Countdown date={weddingDateTime} renderer={this.renderCountdown} />;
  }
}

export default DateCountDown;
