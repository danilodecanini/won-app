/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import PageTitle from '../../components/PageTitle';
import { Block, Container, P } from './components';

const HomePage = () => {

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem-vindo a Won Games!</h2>
                <P>
                  Ao lado voc6e pode começar!
                </P>
            </Block>
          </div>

        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
