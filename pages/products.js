import React from 'react'
import stylesheet from 'styles/main.scss'

import { action } from '@storybook/addon-actions'
import { default as Layout } from '../components/layout/layout'

import { Highlights } from '../components/highlights'
import { Header } from '../components/header'
import { mediaHighlights, media, wallets } from '../components/constants'
import { Media } from '../components/media'
import { Wallets } from '../components/wallets'
import { MediaCTA } from '../components/media-cta'
import { Button } from '../components/button'
import { MyBitFooter } from '../components/footer/footer'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '273px'
          }}
        >
          <Header />
        </div>
        <div
          style={{
            marginTop: '100px'
          }}
        >
          <Highlights highlights={mediaHighlights} />
        </div>
        <div
          style={{
            marginTop: '77.9px'
          }}
        >
          <Media media={media} />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto', marginTop: '119px' }}
        >
          <Highlights
            highlights={[
              {
                title: 'Native Wallets',
                isLight: true,
                isCentered: true,
                isTransparent: true,
                isFullWidth: true
              }
            ]}
          />
        </div>
        <div
          style={{
            marginLeft: '210px'
          }}
        >
          <Wallets Wallets={wallets} />
        </div>
        <div
          style={{
            marginTop: '40px'
          }}
        >
          <MediaCTA
            title="Are you an app developer?"
            content="<p>Learn about being rewarded for developing for MyBit.</p>"
            button={[
              <Button
                key="buttonA"
                label="Learn more"
                onClick={action('button-click')}
              />,
              <Button
                key="buttonB"
                label="Learn even more"
                onClick={action('button-click')}
              />
            ]}
          />
        </div>
        <div
          className="grid__container"
          style={{ marginTop: '134px', margin: 'auto' }}
        >
          <MyBitFooter />
        </div>
      </Layout>
    )
  }
}
