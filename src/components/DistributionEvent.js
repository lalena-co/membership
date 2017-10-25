import React, { Component } from 'react';
import LoadingFactory from 'components/LoadingFactory';
import Factory from 'components/Factory';
import FactoryCredit from 'components/FactoryCredit';
import AngelDescription from 'components/AngelDescription';
import SeedDescription from 'components/SeedDescription';
import Seedling from 'components/emojis/Seedling';
import AngelEmoji from 'components/emojis/Angel';
import Text from 'components/Text';
import Angel from 'components/Angel';
import CreateAngel from 'components/CreateAngel';
import Seed from 'components/Seed';
import v from 'vudu';
import { styles as s, breakpoints, colors } from 'stylesheet';

const localClasses = v({
  round: {
    '@composes': [
      s.flex,
      s.flexColumn,
    ],
    flex: '1',
    marginBottom: '20px',
    [breakpoints.desktop]: {
      '@composes': [
        s.flexRow,
      ],
    },
  },
  title: {
    marginBottom: '20px',
  },
  factory: {
    padding: '20px',
    marginBottom: '20px',
    color: colors.white,
    flex: '1',
    width: '100%',
    [breakpoints.desktop]: {
      flex: '0.45',
      marginRight: '20px',
      marginBottom: '0',
    },
  },
  section: {
    width: '100%',
    padding: '20px',
    flex: '1',
    [breakpoints.desktop]: {
      width: '50%',
    },
  },
  angel: {
    border: `1px solid ${colors.blue}`,
  },
  angelFactory: {
    backgroundColor: colors.blue,
  },
  seed: {
    border: `1px solid ${colors.green}`,
  },
  seedFactory: {
    backgroundColor: colors.green,
    color: colors.black,
  },
});

class DistributionEvent extends Component {

  render = () => {
    const { actions, angel, factories, seed } = this.props;
    return (
      <div>
        <div className={localClasses.round}>
          <aside className={[localClasses.factory, localClasses.angelFactory].join(' ')}>
            {factories.angel ? (
              <Factory { ...factories.angel } title={'Angel'} />
            ) : <LoadingFactory />}
            <FactoryCredit />
          </aside>
          <section key={'angel'} className={[localClasses.section, localClasses.angel].join(' ')}>
            <AngelEmoji/>
            <Text classes={localClasses.title} variant={'h5'}>{'Angel'}</Text>
            {!angel && (
               <AngelDescription />
             )}
            {angel ? <Angel {...angel} /> : <CreateAngel handleCreate={actions.createAngel} />}
          </section>
        </div>

        <div className={localClasses.round}>
          <aside className={[localClasses.factory, localClasses.seedFactory].join(' ')}>
            {factories.seed ? (
              <Factory { ...factories.seed } title={'Seed'} />
            ) : <LoadingFactory dark />}
            <FactoryCredit />
          </aside>
          <section key={'seed'} className={[localClasses.section, localClasses.seed].join(' ')}>
            <Seedling/>
            <Text classes={localClasses.title} variant={'h5'}>{'Seed'}</Text>
            {!seed && (
              <SeedDescription />
            )}
            {seed && <Seed {...seed} />}
          </section>
        </div>
      </div>
    );
  }
}

export default DistributionEvent;
