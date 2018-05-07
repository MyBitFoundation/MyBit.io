import React from 'react'
import stylesheet from 'styles/main.scss'

import { default as Layout } from '../components/layout/layout'
import { Container } from '../components/layout/container'

import { Highlights, Highlight } from '../components/highlights'
import { IconList } from '../components/icon'
import Achievements from '../components/achievements'
import { Header } from '../components/header'
import { HeroBanner } from '../components/hero-banner'
import { diamondHighlights, achievements } from '../components/constants'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div
          className="grid__container"
          style={{
            height: '1000px'
          }}
        >
          <Header />
          <HeroBanner />
        </div>
        <div className="grid__container">
          <Highlights highlights={diamondHighlights} isDiamond />
        </div>
        <div
          className="grid__container"
          style={{
            marginTop: '-500px',
            marginBottom: '750px'
          }}
        >
          <Container
            isStyled
            hasCenteredDiamond
            leftNode={
              <Highlight
                title={'Investors'}
                content={`<p>Gain direct access to the 11.1 Trillion
                  dollar machine economy.</p>`}
                icon="investors"
                isDiamond
                style={{ margin: 'auto 0', paddingLeft: '50px' }}
                isTransparent
              />
            }
            centerNode={
              <Highlight
                title={'Industries'}
                content={`<p>The MyBit Ecosystem functions as a global, multi-industrial investment platform.</p>`}
                isDiamond
                style={{ margin: 'auto' }}
                isTransparent
              />
            }
            rightNode={
              <Highlight
                title={'Asset Manager'}
                content={`<p>Profit from operating and maintaining
                  IoT devices.</p>`}
                icon="asset-manager"
                isDiamond
                style={{
                  margin: 'auto 0',
                  paddingRight: '50px',
                  right: 0,
                  left: 'auto'
                }}
                isTransparent
              />
            }
          />
        </div>
        <div
          className="grid__container"
          style={{ width: '100%', margin: 'auto' }}
        >
          <Highlights
            hasAlternateColors={false}
            highlights={[
              {
                title: 'Agriculture',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'agriculture',
                isLight: false,
                isThin: true
              },
              {
                title: 'Manufacturing',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'manufacturing',
                isLight: false,
                isThin: true
              },
              {
                title: 'Logistics',
                content: `<p>Our ecosystem succeeds with cutting
                edge technology and an amazing community</p>`,
                icon: 'logistics',
                isLight: false,
                isThin: true
              }
            ]}
          />
        </div>
        <div
          className="grid__container"
          style={{
            position: 'relative',
            height: '600px'
          }}
        >
          <Highlight
            title={'Join our Community'}
            isDiamond
            isLight
            isTransparent
            isBig
            style={{ margin: 'auto' }}
            isContentANode
            content={<IconList />}
          />
        </div>
        <div className="grid__container">
          <Container
            isStyled
            isStyledShort
            hasCenteredDiamond
            leftNode={
              <Highlight
                title={'Access'}
                content={`<p>MYB, is the native token of the MyBit Ecosystem
                  and acts as an access token, unlocking the future of
                  investing. MYB used to access the platform are “burnt”,
                  reducing the supply of the token.</p>`}
                icon="access"
                isDiamond
                isMedium
                style={{ margin: 'auto 0' }}
                isTransparent
              />
            }
            centerNode={
              <Highlight
                title={'Token'}
                content={`<p>The MyBit Token (MYB) powers the MyBit ecosystem,
                unlocking the future economy.</p>`}
                isDiamond
                isLight
                style={{ margin: 'auto' }}
              />
            }
            rightNode={
              <Highlight
                title={'Staking'}
                content={`<p>Holders of MYB are rewarded for staking their
                  tokens. This enables the MyBit Platform to achieve
                  distributed consensus and increase the reliability
                  of the entire ecosystem.</p>`}
                icon="staking"
                isDiamond
                isMedium
                style={{
                  margin: 'auto 0',
                  right: 0,
                  left: 'auto'
                }}
                isTransparent
              />
            }
          />
        </div>
        <div
          className="grid__container"
          style={{
            margin: 'auto',
            width: '1600px',
            marginTop: '100px'
          }}
        >
          <Achievements achievements={achievements} />
        </div>
      </Layout>
    )
  }
}
