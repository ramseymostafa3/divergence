import * as React from 'react'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Switch from '@mui/material/Switch'
import MainPricingDashboard from '../MainPricingDashboard/MainPricingDashboard'
import { useNavigate } from 'react-router-dom'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'
import { useDispatch, useSelector } from 'react-redux'
import { setBilling } from '../../slices/billingSlice'
import { useGetPlansQuery } from '../../api/stripe'
import { plansDescription } from '../../fixtures'

export default function Pricing() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMonthlyInit = useSelector((state) => state.billing.isMonthly)
  const [isMonthly, setIsMonthly] = useState(isMonthlyInit)
  const [monthlyPlans, setMonthlyPlans] = useState([])
  const [yearPlans, setYearPlans] = useState([])
  const { data: plans } = useGetPlansQuery()

  const plansToRender = isMonthly ? monthlyPlans : yearPlans

  function handleTerm() {
    setIsMonthly(!isMonthly)
  }

  function handleClick(planData) {
    return function (event) {
      event.preventDefault()
      dispatch(
        setBilling({
          price: planData.price,
          plan: planData.title,
          plan_id: planData.id,
          isMonthly,
        })
      )
      navigate('../setup-payment')
    }
  }

  function setPlan(interval, initialDescription, fetchedData) {
    const joinedPlans = initialDescription.map((plan, ind) => {
      if (fetchedData[ind]) {
        return {
          ...plan,
          title: fetchedData[ind].nickname,
          price: fetchedData[ind].amount / 100,
          id: fetchedData[ind].id,
        }
      } else {
        return plan
      }
    })
    switch (interval) {
      case 'month':
        setMonthlyPlans(joinedPlans)
        break
      case 'year':
        setYearPlans(joinedPlans)
        break
    }
  }

  useEffect(() => {
    if (Array.isArray(plans?.data)) {
      const plansData = plans.data
      const monthlyPlansData = plansData.filter(
        (plan) => plan.interval === 'month'
      )
      const yearPlansData = plansData.filter((plan) => plan.interval === 'year')
      setPlan('month', plansDescription, monthlyPlansData)
      setPlan('year', plansDescription, yearPlansData)
    }
  }, [plans])

  return (
    <MainPricingDashboard>
      <Grid sx={{ backgroundColor: '#0f0f11' }}>
        {/* Hero unit */}

        {/* End hero unit */}
        <Container
          maxWidth="xl"
          component="main"
          sx={{
            backgroundColor: 'none',
            height: '100vh',
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <h1 style={{ 'color': 'white' }}>Choose your plan</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <DoneRoundedIcon
              sx={{
                fontSize: '15px',
                margin: '10px',
                padding: '2px',
                color: 'white',
                backgroundColor: 'rgb(39,39,41)',
                border: 'none',
                borderRadius: '50%',
              }}
            />

            <p>No commitments, cancel any time. </p>
            <DoneRoundedIcon
              sx={{
                fontSize: '15px',
                margin: '10px',
                padding: '2px',
                color: 'white',
                backgroundColor: 'rgb(39,39,41)',
                border: 'none',
                borderRadius: '50%',
              }}
            />

            <p>No charges or extra fees. Ever. </p>
            <DoneRoundedIcon
              sx={{
                fontSize: '15px',
                margin: '10px',
                padding: '2px',
                color: 'white',
                backgroundColor: 'rgb(39,39,41)',
                border: 'none',
                borderRadius: '50%',
              }}
            />

            <p>Switch plans or cancel any time. </p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <h3 style={{ 'color': 'white' }}>Monthly</h3>
            <Switch checked={!isMonthly} onChange={handleTerm} />
            <h3 style={{ 'color': 'white' }}>Anually</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {plansToRender.map((plan) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={plan.id}
                xs={12}
                // sm={tier.title === "Enterprise" ? 12 : 6}
                sm={12}
                md={4}
              >
                <Card
                  sx={{
                    backgroundColor: '#141415',
                    mt: 5,
                    borderRadius: '15px 15px 15px 15px',
                  }}
                >
                  {plan.subheader === 'Most popular' ? (
                    <CardHeader
                      // title={tier.title}
                      subheader={plan.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{
                        align: 'center',
                        color: 'white',
                      }}
                      sx={{
                        backgroundColor:
                          plan.subheader === 'Most popular' ? '#ee6535' : null,
                        margin: 0,
                      }}
                    />
                  ) : null}

                  <CardContent
                    sx={{
                      minHeight: 450,
                      backgroundColor:
                        plan.subheader === 'Most popular' ? '#181212' : null,
                      borderRadius:
                        plan.subheader === 'Most popular'
                          ? '0px 0px 15px 15px'
                          : '15px 15px 15px 15px',
                      border:
                        plan.subheader === 'Most popular'
                          ? '2px solid #ee6535'
                          : '2px solid rgb(30,30,30)',
                      // width :400
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',

                        alignItems: 'baseline',
                        mb: 2,
                        pl: 2,
                        pr: 2,
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      // alignItems="flex-start"
                      >
                        {' '}
                        <Grid item xs={6} md={6}>
                          <h2
                            className="plan-name"
                            style={{ fontSize: '35px' }}
                          >
                            {plan.title}
                          </h2>
                          <p
                            style={{
                              marginTop: 0,
                              fontSize: '17px',
                            }}
                          >
                            Free to use for 14 days
                          </p>
                        </Grid>
                        <Grid
                          xs={6}
                          md={6}
                          container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="baseline"
                        >
                          <h1 className="head price">${plan.price}</h1>
                          <p>/{isMonthly ? 'mo' : 'year'}</p>
                        </Grid>{' '}
                        <Button
                          type="button"
                          onClick={handleClick(plan)}
                          // variant="contained"
                          fullWidth
                          variant={plan.buttonVariant}
                          style={{
                            // color: "#ee6535",
                            // fontSize: ,
                            textDecoration: 'none',
                            fontSize: '12px',
                            height: '40px',
                            borderRadius: '7px',
                          }}
                          sx={{
                            mt: 1,
                            mb: 2,
                            backgroundColor:
                              plan.subheader === 'Most popular'
                                ? 'none'
                                : 'rgb(30,30,30)',
                            color: 'white',
                            border:
                              plan.subheader === 'Most popular'
                                ? 'none'
                                : 'rgb(30,30,30)',
                            // fontSize: 12,
                            textDecoration: 'none',
                          }}
                        >
                          {plan.btn}
                        </Button>
                      </Grid>
                    </Box>
                    <ul>
                      {plan.description.map((line) => (
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                        >
                          <DoneRoundedIcon
                            sx={{
                              fontSize: '15px',
                              margin: '10px',
                              padding: '2px',
                              color: 'rgb(255,104,56)',
                              backgroundColor: 'rgb(44,29,25)',
                              border: 'none',
                              borderRadius: '50%',
                            }}
                          />

                          <Typography
                            component="li"
                            variant="subtitle1"
                            // align="center"
                            key={line}
                            sx={{
                              fontSize: 12,
                              color: '#dadada',
                              lineHeight: 0.5,
                            }}
                          >
                            {line}
                          </Typography>
                        </Grid>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </MainPricingDashboard>
  )
}
