import React, { useState } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import './style.css'
import {
  useGetUserBrokersQuery,
  useLazyGetAccountByBrokerQuery,
  useLazyGetUserBrokersQuery,
  usePostUserBrokerMutation,
} from '../../api/brokers'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserCredentials } from '../../slices/authSlice'
import { usePatchUserBrokerByIdMutation } from '../../api/users'
import { LoadingButton } from '@mui/lab'
import { pushToast } from '../../slices/toastSlice'
import { toastMessages, toastTypes } from '../../fixtures'

const SelectBrokerPopup = ({ open, handleClose, brokerConfig, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { publicId } = useSelector(selectUserCredentials)
  const dispatch = useDispatch()

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const [postUserBroker] = usePostUserBrokerMutation()
  const [getUserBroker] = useLazyGetUserBrokersQuery()
  const [patchUserBrokerById] = usePatchUserBrokerByIdMutation()
  const [getAccountByBroker] = useLazyGetAccountByBrokerQuery()
  const { data: userBrokers, refetch: refetchUserBrokers } =
    useGetUserBrokersQuery({ publicId }, { skip: !publicId })

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    height: 700,
    border: '10px solid rgb(30,30,30 , 0) !important',
    p: 4,
  }

  const isOanda = brokerConfig.name?.toLowerCase().includes('oanda')

  const patchBrokerCredentials = async (brokerId, patchData) => {
    try {
      const { data: userBrokers } = await getUserBroker({ publicId })
      const brokerToUpdate = userBrokers.find(
        (data) => data.broker_id === brokerId
      )

      for (const [key, value] of Object.entries(patchData)) {
        const currentField = brokerToUpdate.user_broker_setting.find(
          (data) => data.broker_setting.option_name.toLowerCase() === key
        )

        await patchUserBrokerById({
          publicId,
          data: {
            id: currentField.id,
            broker_setting_id: currentField.broker_setting_id,
            option_value: value,
          },
        })
      }
    } catch (err) {
      console.log('error: ', err.message)
    }
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      const form = event.currentTarget
      const isValid = form.checkValidity()

      if (!isValid) {
        dispatch(
          pushToast({
            type: toastTypes.warning,
            message: toastMessages.postBroker.warningAllFields,
          })
        )
        return
      }
      setIsLoading(true)

      let userData = Object.fromEntries(new FormData(form))
      refetchUserBrokers()
      if (!userBrokers.some((el) => el.broker_id === brokerConfig.id)) {
        const postBroker = await postUserBroker({
          publicId,
          broker_id: brokerConfig.id,
        })
        if (postBroker?.data === null) {
          setValues({
            ...values,
            password: '',
          })
        }
      }
      await patchBrokerCredentials(brokerConfig.id, userData)
      const { data: accountId } = await getAccountByBroker({
        publicId,
        broker_id: brokerConfig.id,
      })
      if (!accountId) {
        throw new Error(toastMessages.getAccount.error)
      }
      onSubmit()
      handleClose()
    } catch (err) {
      console.log(err.message)
      dispatch(
        pushToast({
          type: toastTypes.error,
          message:
            err.message === toastMessages.getAccount.error
              ? toastMessages.getAccount.error
              : toastMessages.postBroker.error,
        })
      )
    }
    setIsLoading(false)
  }

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
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#141415',
            borderRadius: 2,
            border: '1px solid rgb(41, 41, 41)',
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <CloseIcon
              onClick={handleClose}
              sx={{
                color: 'white',
                margin: '15px 15px 0px 0px',
                cursor: 'pointer',
              }}
            />
          </Grid>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid px={3} pb={3}>
              <h1 style={{ 'color': 'white' }}>Connect with {isOanda ? 'Oanda' : 'IG'}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente atque, iure
              </p>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                {isOanda && (
                  <>
                    <Grid>
                      <h5>Token</h5>
                    </Grid>
                    <TextField
                      sx={{
                        '& .MuiOutlinedInput-root': {
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
                      className="inputField1"
                      margin="normal"
                      placeholder="Enter token"
                      required
                      fullWidth
                      id="token"
                      type="text"
                      size="small"
                      name="token"
                    />
                  </>
                )}
                {!isOanda && (
                  <>
                    <Grid>
                      <h5>Username</h5>
                    </Grid>
                    <TextField
                      sx={{
                        '& .MuiOutlinedInput-root': {
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
                      className="inputField1"
                      margin="normal"
                      placeholder="Enter username"
                      required
                      fullWidth
                      id="username"
                      type="text"
                      size="small"
                      name="username"
                    />
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
                      className="inputField1"
                      margin="normal"
                      placeholder="Enter password"
                      required
                      fullWidth
                      size="small"
                      name="password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
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
                      <h5>API key</h5>
                    </Grid>
                    <TextField
                      sx={{
                        '& .MuiOutlinedInput-root': {
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
                      className="inputField1"
                      margin="normal"
                      placeholder="Enter API key"
                      required
                      fullWidth
                      id="api_key"
                      type="text"
                      size="small"
                      name="api_key"
                    />
                  </>
                )}
                <Grid>
                  <h5>Default account</h5>
                </Grid>
                <TextField
                  sx={{
                    '& .MuiOutlinedInput-root': {
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
                  className="inputField1"
                  margin="normal"
                  placeholder="Enter Default account"
                  required
                  fullWidth
                  id="accountid"
                  type="text"
                  size="small"
                  name="accountid"
                />
              </Grid>
              <LoadingButton
                type="submit"
                fullWidth
                loading={isLoading}
                variant="text"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#ee6535',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                style={{
                  textDecoration: 'none',
                  fontSize: '12px',
                  height: '40px',
                  borderRadius: '7px',
                }}
              >
                Done
              </LoadingButton>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default SelectBrokerPopup
