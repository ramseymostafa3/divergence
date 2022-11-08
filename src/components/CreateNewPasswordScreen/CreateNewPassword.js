import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Logo from '../Logo/Logo'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MainScreen from '../MainScreen/MainScreen'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import { useSetPasswordMutation } from '../../api/auth'
import { useDispatch } from 'react-redux'
import { pushToast } from '../../slices/toastSlice'
import { toastMessages, toastTypes } from '../../fixtures'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

// const theme = createTheme();

export default function CreateNewPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [setPassword] = useSetPasswordMutation()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!searchParams.has('reset-token')) {
      dispatch(
        pushToast({
          type: toastTypes.warning,
          message: toastMessages.setPassword.warningToken,
        })
      )
      return
    }

    const form = event.currentTarget
    const isValid = form.checkValidity()

    if (!isValid) {
      dispatch(
        pushToast({
          type: toastTypes.warning,
          message: toastMessages.setPassword.warningPassword,
        })
      )
      return
    }

    const data = new FormData(form)
    const password = data.get('password')
    const retypePassword = data.get('confirmPassword')

    if (password !== retypePassword) {
      dispatch(
        pushToast({
          type: toastTypes.warning,
          message: toastMessages.setPassword.warningPassword,
        })
      )
      return
    }

    const token = searchParams.get('reset-token')
    const newPassword = { new_password: password }

    setPassword({ token, newPassword })
      .unwrap()
      .then((data) => {
        if (data.status === 'success') {
          navigate('../login')
        }
      })
      .catch((err) => console.log('err', err))
  }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    confirmPassword: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
      showConfirmPassword: !values.showConfirmPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <MainScreen>
      <Grid
        className="leftSide"
        xs={12}
        sm={12}
        md={6}
        lg={5.5}
        sx={{
          padding: 5,
          paddingRight: {
            lg: 15,
            md: 0,
            sm: 0,
          },
        }}
        square
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* </Grid> */}

          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: '88vh' }}
          >
            <Grid>
              {' '}
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 1,
                  width: {
                    md: 450,
                    sm: 450,
                    xs: 450,
                  },
                }}
              >
                <Logo />
                <h1>Create new password</h1>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, iusto mollitia a consequuntur, incidunt totam
                  obcaecati repellendus unde quidem
                </p>

                <Grid>
                  <h5>Password</h5>
                </Grid>
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root ': {
                      '& > fieldset': {
                        borderColor: 'rgb(39, 39, 39)',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover': {
                      '& > fieldset': {
                        borderColor: 'rgb(39, 39, 39)',
                      },
                    },
                  }}
                  inputProps={{
                    style: {
                      color: 'white',
                      fontSize: 15,
                      height: 30,
                    },
                  }}
                  className="inputField"
                  margin="normal"
                  placeholder="Create password"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff sx={{ color: 'gray' }} />
                          ) : (
                            <Visibility sx={{ color: 'gray' }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Grid>
                  <h5>Confirm password</h5>
                </Grid>
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root ': {
                      '& > fieldset': {
                        borderColor: 'rgb(39, 39, 39)',
                      },
                    },
                    '& .MuiOutlinedInput-root:hover': {
                      '& > fieldset': {
                        borderColor: 'rgb(39, 39, 39)',
                      },
                    },
                  }}
                  inputProps={{
                    style: {
                      color: 'white',
                      fontSize: 15,
                      height: 30,
                    },
                  }}
                  className="inputField"
                  margin="normal"
                  placeholder="Re enter password"
                  required
                  fullWidth
                  size="small"
                  name="confirmPassword"
                  type={values.showConfirmPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  id="confirmPassword"
                  autoComplete="current-password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showConfirmPassword ? (
                            <VisibilityOff sx={{ color: 'gray' }} />
                          ) : (
                            <Visibility sx={{ color: 'gray' }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: '#ff6838',
                    textTransform: 'none',
                    fontWeight: 'normal',
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
            <Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </MainScreen>
  )
}
