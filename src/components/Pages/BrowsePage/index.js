/** @jsx jsx */
import React from 'react'
import { jsx, BaseStyles } from 'theme-ui'
import CardGroup from 'components/Shared/CardGroup'
import Column from 'components/Shared/Column'
import HeroBox from 'components/Shared/HeroBox'
import MiniCard from 'components/Shared/MiniCard'
import MultiColumn from 'components/Shared/MultiColumn'
import SearchBox from 'components/Shared/SearchBox'

const Browse = ({ location }) => {
  const dates = [
    {
      label: '1300-1399',
      target: '/search?timeperiod[0]=1300-1399',
    },
    {
      label: '1400-1499',
      target: '/search?timeperiod[0]=1400-1499',
    },
    {
      label: '1500-1599',
      target: '/search?timeperiod[0]=1500-1599',
    },
    {
      label: '1600-1699',
      target: '/search?timeperiod[0]=1600-1699',
    },
    {
      label: '1700-1799',
      target: '/search?timeperiod[0]=1700-1799',
    },
    {
      label: '1800-1899',
      target: '/search?timeperiod[0]=1800-1899',
    },
    {
      label: '1900-1999',
      target: '/search?timeperiod[0]=1900-1999',
    },
    {
      label: '2000-present',
      target: '/search?timeperiod[0]=2000-present',
    },
    {
      label: 'undated',
      target: '/search?timeperiod[0]=undated',
    },
  ]
  const formats = [
    {
      label: 'Paintings',
      target: '/search?format[0]=paintings',
    },
    {
      label: 'Maps',
      target: '/search?format[0]=Cartographic%20material',
    },
    {
      label: 'Photographs',
      target: '/search?format[0]=photographs',
    },
    {
      label: 'Prints and Posters',
      target: '/search?format[0]=prints&format[1]=Two-dimensional%20nonprojected%20graphic&format[2]=Projected%20medium',
    },
    {
      label: 'Drawings',
      target: '/search?format[0]=drawings',
    },
    {
      label: 'Sculpture',
      target: '/search?format[0]=sculpture',
    },
    {
      label: 'Ceremonial objects and regalia',
      target: '/search?format[0]=ceremonial%20objects%20and%20regalia',

    },
    {
      label: 'Decorative Arts, Craft, and Design',
      target: '/search?format[0]=ceramics&format[1]=glass&format[2]=metalwork',
    },
    {
      label: 'Musical scores and recordings',
      target: '/search?format[0]=Musical%20sound%20recording&format[1]=Notated%20music',
    },
    {
      label: 'Texts',
      target: '/search?format[0]=Language material',
    },
    {
      label: 'Textiles',
      target: '/search?format[0]=textiles',
    },
    {
      label: 'Tools, implements, and weights',
      target: '/search?format[0]=tools%2C%20implements%2C%20and%20weights',
    },
    {
      label: 'Costume and accessories',
      target: '/search?format[0]=costume%20and%20accessories',
    },
    {
      label: 'Arms and armor',
      target: '/search?format[0]=arms%20and%20armor',
    },
    {
      label: 'Building components and ornaments',
      target: '/search?format[0]=building%20components&format[1]=house%20ornaments',
    },
    {
      label: 'Dolls, toys, and games',
      target: '/search?format[0]=dolls%2C%20toys%2C%20and%20games',
    },
  ]
  const locations = [
    {
      label: 'Rare Books & Special Collections',
      target: '/search?campuslocation[0]=Rare%20Books%20%26%20Special%20Collections',
    },
    {
      label: 'Snite Museum of Art',
      target: '/search?campuslocation[0]=Snite%20Museum%20of%20Art',
    },
    {
      label: 'University Archives',
      target: '/search?campuslocation[0]=University%20Archives',
    },
    {
      label: 'General Collection, Hesburgh Libraries',
      target: '/search?campuslocation[0]=General%20Collection%2C%20Hesburgh%20Libraries',
    },
  ]
  return (
    <React.Fragment>
      <HeroBox backgroundColor='gray.0'>
        <SearchBox location={location} />
      </HeroBox>
      <MultiColumn columns='5'>
        <Column>
          <div id='date'>
            <BaseStyles>
              <h2>Browse By Date</h2>
            </BaseStyles>
          </div>
        </Column>
        <Column colSpan='4'>
          <CardGroup>
            {
              dates.map(date => {
                return (
                  <MiniCard
                    key={date.label}
                    label={date.label}
                    target={date.target}
                  />
                )
              })
            }
          </CardGroup>
        </Column>
      </MultiColumn>
      <MultiColumn columns='5'>
        <Column>
          <div id='format'>
            <BaseStyles>
              <h2>Browse By Work Type</h2>
            </BaseStyles>
          </div>
        </Column>
        <Column colSpan='4'>
          <CardGroup>
            {
              formats.map(format => {
                return (
                  <MiniCard
                    key={format.label}
                    label={format.label}
                    target={format.target}
                  />
                )
              })
            }
          </CardGroup>
        </Column>
      </MultiColumn>
      <MultiColumn columns='5'>
        <Column>
          <div id='location'>
            <BaseStyles>
              <h2>Browse By Location</h2>
            </BaseStyles>
          </div>
        </Column>
        <Column colSpan='4'>
          <CardGroup>
            {
              locations.map(location => {
                return (
                  <MiniCard
                    key={location.label}
                    label={location.label}
                    target={location.target}
                  />
                )
              })
            }
          </CardGroup>
        </Column>
      </MultiColumn>
    </React.Fragment>
  )
}

export default Browse