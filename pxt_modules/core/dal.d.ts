// Auto-generated. Do not edit.
declare const enum DAL {
    // /yotta_modules/microbit-dal/inc/bluetooth/ExternalEvents.h
    MICROBIT_ID_BLE = 1000,
    MICROBIT_ID_BLE_UART = 1200,
    MICROBIT_BLE_EVT_CONNECTED = 1,
    MICROBIT_BLE_EVT_DISCONNECTED = 2,
    // /yotta_modules/microbit-dal/inc/bluetooth/MESEvents.h
    MES_REMOTE_CONTROL_ID = 1001,
    MES_REMOTE_CONTROL_EVT_PLAY = 1,
    MES_REMOTE_CONTROL_EVT_PAUSE = 2,
    MES_REMOTE_CONTROL_EVT_STOP = 3,
    MES_REMOTE_CONTROL_EVT_NEXTTRACK = 4,
    MES_REMOTE_CONTROL_EVT_PREVTRACK = 5,
    MES_REMOTE_CONTROL_EVT_FORWARD = 6,
    MES_REMOTE_CONTROL_EVT_REWIND = 7,
    MES_REMOTE_CONTROL_EVT_VOLUMEUP = 8,
    MES_REMOTE_CONTROL_EVT_VOLUMEDOWN = 9,
    MES_CAMERA_ID = 1002,
    MES_CAMERA_EVT_LAUNCH_PHOTO_MODE = 1,
    MES_CAMERA_EVT_LAUNCH_VIDEO_MODE = 2,
    MES_CAMERA_EVT_TAKE_PHOTO = 3,
    MES_CAMERA_EVT_START_VIDEO_CAPTURE = 4,
    MES_CAMERA_EVT_STOP_VIDEO_CAPTURE = 5,
    MES_CAMERA_EVT_STOP_PHOTO_MODE = 6,
    MES_CAMERA_EVT_STOP_VIDEO_MODE = 7,
    MES_CAMERA_EVT_TOGGLE_FRONT_REAR = 8,
    MES_ALERTS_ID = 1004,
    MES_ALERT_EVT_DISPLAY_TOAST = 1,
    MES_ALERT_EVT_VIBRATE = 2,
    MES_ALERT_EVT_PLAY_SOUND = 3,
    MES_ALERT_EVT_PLAY_RINGTONE = 4,
    MES_ALERT_EVT_FIND_MY_PHONE = 5,
    MES_ALERT_EVT_ALARM1 = 6,
    MES_ALERT_EVT_ALARM2 = 7,
    MES_ALERT_EVT_ALARM3 = 8,
    MES_ALERT_EVT_ALARM4 = 9,
    MES_ALERT_EVT_ALARM5 = 10,
    MES_ALERT_EVT_ALARM6 = 11,
    MES_SIGNAL_STRENGTH_ID = 1101,
    MES_SIGNAL_STRENGTH_EVT_NO_BAR = 1,
    MES_SIGNAL_STRENGTH_EVT_ONE_BAR = 2,
    MES_SIGNAL_STRENGTH_EVT_TWO_BAR = 3,
    MES_SIGNAL_STRENGTH_EVT_THREE_BAR = 4,
    MES_SIGNAL_STRENGTH_EVT_FOUR_BAR = 5,
    MES_DEVICE_INFO_ID = 1103,
    MES_DEVICE_ORIENTATION_LANDSCAPE = 1,
    MES_DEVICE_ORIENTATION_PORTRAIT = 2,
    MES_DEVICE_GESTURE_NONE = 3,
    MES_DEVICE_GESTURE_DEVICE_SHAKEN = 4,
    MES_DEVICE_DISPLAY_OFF = 5,
    MES_DEVICE_DISPLAY_ON = 6,
    MES_DEVICE_INCOMING_CALL = 7,
    MES_DEVICE_INCOMING_MESSAGE = 8,
    MES_DPAD_CONTROLLER_ID = 1104,
    MES_DPAD_BUTTON_A_DOWN = 1,
    MES_DPAD_BUTTON_A_UP = 2,
    MES_DPAD_BUTTON_B_DOWN = 3,
    MES_DPAD_BUTTON_B_UP = 4,
    MES_DPAD_BUTTON_C_DOWN = 5,
    MES_DPAD_BUTTON_C_UP = 6,
    MES_DPAD_BUTTON_D_DOWN = 7,
    MES_DPAD_BUTTON_D_UP = 8,
    MES_DPAD_BUTTON_1_DOWN = 9,
    MES_DPAD_BUTTON_1_UP = 10,
    MES_DPAD_BUTTON_2_DOWN = 11,
    MES_DPAD_BUTTON_2_UP = 12,
    MES_DPAD_BUTTON_3_DOWN = 13,
    MES_DPAD_BUTTON_3_UP = 14,
    MES_DPAD_BUTTON_4_DOWN = 15,
    MES_DPAD_BUTTON_4_UP = 16,
    MES_BROADCAST_GENERAL_ID = 2000,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitBLEManager.h
    MICROBIT_BLE_PAIR_REQUEST = 1,
    MICROBIT_BLE_PAIR_COMPLETE = 2,
    MICROBIT_BLE_PAIR_PASSCODE = 4,
    MICROBIT_BLE_PAIR_SUCCESSFUL = 8,
    MICROBIT_BLE_PAIRING_TIMEOUT = 90,
    MICROBIT_BLE_POWER_LEVELS = 8,
    MICROBIT_BLE_MAXIMUM_BONDS = 4,
    MICROBIT_BLE_EDDYSTONE_ADV_INTERVAL = 400,
    MICROBIT_BLE_EDDYSTONE_DEFAULT_POWER = 240,
    MICROBIT_BLE_STATUS_STORE_SYSATTR = 2,
    MICROBIT_BLE_STATUS_DISCONNECT = 4,
    MICROBIT_BLE_DISCONNECT_AFTER_PAIRING_DELAY = 500,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitDFUService.h
    MICROBIT_DFU_OPCODE_START_DFU = 1,
    MICROBIT_DFU_HISTOGRAM_WIDTH = 5,
    MICROBIT_DFU_HISTOGRAM_HEIGHT = 5,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitIOPinService.h
    MICROBIT_IO_PIN_SERVICE_PINCOUNT = 19,
    MICROBIT_IO_PIN_SERVICE_DATA_SIZE = 10,
    MICROBIT_PWM_PIN_SERVICE_DATA_SIZE = 2,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitLEDService.h
    MICROBIT_BLE_MAXIMUM_SCROLLTEXT = 20,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitMagnetometerService.h
    COMPASS_CALIBRATION_STATUS_UNKNOWN = 0,
    COMPASS_CALIBRATION_REQUESTED = 1,
    COMPASS_CALIBRATION_COMPLETED_OK = 2,
    COMPASS_CALIBRATION_COMPLETED_ERR = 3,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitPartialFlashingService.h
    PARTIAL_FLASHING_VERSION = 1,
    REGION_INFO = 0,
    FLASH_DATA = 1,
    END_OF_TRANSMISSION = 2,
    MICROBIT_STATUS = 238,
    MICROBIT_RESET = 255,
    // /yotta_modules/microbit-dal/inc/bluetooth/MicroBitUARTService.h
    MICROBIT_UART_S_DEFAULT_BUF_SIZE = 20,
    MICROBIT_UART_S_EVT_DELIM_MATCH = 1,
    MICROBIT_UART_S_EVT_HEAD_MATCH = 2,
    MICROBIT_UART_S_EVT_RX_FULL = 3,
    // /yotta_modules/microbit-dal/inc/core/ErrorNo.h
    MICROBIT_OK = 0,
    MICROBIT_INVALID_PARAMETER = -1001,
    MICROBIT_NOT_SUPPORTED = -1002,
    MICROBIT_CALIBRATION_IN_PROGRESS = -1003,
    MICROBIT_CALIBRATION_REQUIRED = -1004,
    MICROBIT_NO_RESOURCES = -1005,
    MICROBIT_BUSY = -1006,
    MICROBIT_CANCELLED = -1007,
    MICROBIT_I2C_ERROR = -1010,
    MICROBIT_SERIAL_IN_USE = -1011,
    MICROBIT_NO_DATA = -1012,
    MICROBIT_OOM = 20,
    MICROBIT_HEAP_ERROR = 30,
    MICROBIT_NULL_DEREFERENCE = 40,
    MICROBIT_HARDWARE_UNAVAILABLE_ACC = 50,
    MICROBIT_HARDWARE_UNAVAILABLE_MAG = 51,
    // /yotta_modules/microbit-dal/inc/core/MicroBitComponent.h
    MICROBIT_ID_BUTTON_A = 1,
    MICROBIT_ID_BUTTON_B = 2,
    MICROBIT_ID_BUTTON_AB = 3,
    MICROBIT_ID_BUTTON_RESET = 4,
    MICROBIT_ID_ACCELEROMETER = 5,
    MICROBIT_ID_COMPASS = 6,
    MICROBIT_ID_DISPLAY = 7,
    MICROBIT_ID_THERMOMETER = 8,
    MICROBIT_ID_RADIO = 9,
    MICROBIT_ID_RADIO_DATA_READY = 10,
    MICROBIT_ID_MULTIBUTTON_ATTACH = 11,
    MICROBIT_ID_SERIAL = 12,
    MICROBIT_ID_GESTURE = 13,
    MICROBIT_ID_IO_P0 = 100,
    MICROBIT_ID_IO_P1 = 101,
    MICROBIT_ID_IO_P2 = 102,
    MICROBIT_ID_IO_P3 = 103,
    MICROBIT_ID_IO_P4 = 104,
    MICROBIT_ID_IO_P5 = 105,
    MICROBIT_ID_IO_P6 = 106,
    MICROBIT_ID_IO_P7 = 107,
    MICROBIT_ID_IO_P8 = 108,
    MICROBIT_ID_IO_P9 = 109,
    MICROBIT_ID_IO_P10 = 110,
    MICROBIT_ID_IO_P11 = 111,
    MICROBIT_ID_IO_P12 = 112,
    MICROBIT_ID_IO_P13 = 113,
    MICROBIT_ID_IO_P14 = 114,
    MICROBIT_ID_IO_P15 = 115,
    MICROBIT_ID_IO_P16 = 116,
    MICROBIT_ID_IO_P19 = 119,
    MICROBIT_ID_IO_P20 = 120,
    MICROBIT_ID_IO_INT1 = 130,
    MICROBIT_ID_IO_INT2 = 131,
    MICROBIT_ID_IO_INT3 = 132,
    MICROBIT_ID_PARTIAL_FLASHING = 200,
    MICROBIT_ID_MESSAGE_BUS_LISTENER = 1021,
    MICROBIT_ID_NOTIFY_ONE = 1022,
    MICROBIT_ID_NOTIFY = 1023,
    MICROBIT_COMPONENT_RUNNING = 1,
    // /yotta_modules/microbit-dal/inc/core/MicroBitDevice.h
    MICROBIT_NAME_LENGTH = 5,
    MICROBIT_NAME_CODE_LETTERS = 5,
    MICROBIT_PANIC_ERROR_CHARS = 4,
    // /yotta_modules/microbit-dal/inc/core/MicroBitFiber.h
    MICROBIT_SCHEDULER_RUNNING = 1,
    MICROBIT_FIBER_FLAG_FOB = 1,
    MICROBIT_FIBER_FLAG_PARENT = 2,
    MICROBIT_FIBER_FLAG_CHILD = 4,
    MICROBIT_FIBER_FLAG_DO_NOT_PAGE = 8,
    // /yotta_modules/microbit-dal/inc/core/MicroBitFont.h
    MICROBIT_FONT_WIDTH = 5,
    MICROBIT_FONT_HEIGHT = 5,
    MICROBIT_FONT_ASCII_START = 32,
    MICROBIT_FONT_ASCII_END = 126,
    // /yotta_modules/microbit-dal/inc/core/MicroBitHeapAllocator.h
    MICROBIT_MAXIMUM_HEAPS = 2,
    MICROBIT_HEAP_BLOCK_FREE = 2147483648,
    MICROBIT_HEAP_BLOCK_SIZE = 4,
    // /yotta_modules/microbit-dal/inc/core/MicroBitListener.h
    MESSAGE_BUS_LISTENER_PARAMETERISED = 1,
    MESSAGE_BUS_LISTENER_METHOD = 2,
    MESSAGE_BUS_LISTENER_BUSY = 4,
    MESSAGE_BUS_LISTENER_REENTRANT = 8,
    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 16,
    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 32,
    MESSAGE_BUS_LISTENER_NONBLOCKING = 64,
    MESSAGE_BUS_LISTENER_URGENT = 128,
    MESSAGE_BUS_LISTENER_DELETING = 32768,
    MESSAGE_BUS_LISTENER_IMMEDIATE = 192,
    // /yotta_modules/microbit-dal/inc/core/NotifyEvents.h
    MICROBIT_DISPLAY_EVT_FREE = 1,
    MICROBIT_SERIAL_EVT_TX_EMPTY = 2,
    MICROBIT_UART_S_EVT_TX_EMPTY = 3,
    // /yotta_modules/microbit-dal/inc/drivers/DynamicPwm.h
    MICROBIT_DEFAULT_PWM_PERIOD = 20000,
    // /yotta_modules/microbit-dal/inc/drivers/FXOS8700.h
    FXOS8700_DEFAULT_ADDR = 60,
    FXOS8700_STATUS_REG = 0,
    FXOS8700_OUT_X_MSB = 1,
    FXOS8700_OUT_X_LSB = 2,
    FXOS8700_OUT_Y_MSB = 3,
    FXOS8700_OUT_Y_LSB = 4,
    FXOS8700_OUT_Z_MSB = 5,
    FXOS8700_OUT_Z_LSB = 6,
    FXOS8700_F_SETUP = 9,
    FXOS8700_TRIG_CFG = 10,
    FXOS8700_SYSMOD = 11,
    FXOS8700_INT_SOURCE = 12,
    FXOS8700_WHO_AM_I = 13,
    FXOS8700_XYZ_DATA_CFG = 14,
    FXOS8700_HP_FILTER_CUTOFF = 15,
    FXOS8700_PL_STATUS = 16,
    FXOS8700_PL_CFG = 17,
    FXOS8700_PL_COUNT = 18,
    FXOS8700_PL_BF_ZCOMP = 19,
    FXOS8700_PL_THS_REG = 20,
    FXOS8700_A_FFMT_CFG = 21,
    FXOS8700_A_FFMT_SRC = 22,
    FXOS8700_A_FFMT_THS = 23,
    FXOS8700_A_FFMT_COUNT = 24,
    FXOS8700_TRANSIENT_CFG = 29,
    FXOS8700_TRANSIENT_SRC = 30,
    FXOS8700_TRANSIENT_THS = 31,
    FXOS8700_TRANSIENT_COUNT = 32,
    FXOS8700_PULSE_CFG = 33,
    FXOS8700_PULSE_SRC = 34,
    FXOS8700_PULSE_THSX = 35,
    FXOS8700_PULSE_THSY = 36,
    FXOS8700_PULSE_THSZ = 37,
    FXOS8700_PULSE_TMLT = 38,
    FXOS8700_PULSE_LTCY = 39,
    FXOS8700_PULSE_WIND = 40,
    FXOS8700_ASLP_COUNT = 41,
    FXOS8700_CTRL_REG1 = 42,
    FXOS8700_CTRL_REG2 = 43,
    FXOS8700_CTRL_REG3 = 44,
    FXOS8700_CTRL_REG4 = 45,
    FXOS8700_CTRL_REG5 = 46,
    FXOS8700_OFF_X = 47,
    FXOS8700_OFF_Y = 48,
    FXOS8700_OFF_Z = 49,
    FXOS8700_M_DR_STATUS = 50,
    FXOS8700_M_OUT_X_MSB = 51,
    FXOS8700_M_OUT_X_LSB = 52,
    FXOS8700_M_OUT_Y_MSB = 53,
    FXOS8700_M_OUT_Y_LSB = 54,
    FXOS8700_M_OUT_Z_MSB = 55,
    FXOS8700_M_OUT_Z_LSB = 56,
    FXOS8700_CMP_X_MSB = 57,
    FXOS8700_CMP_X_LSB = 58,
    FXOS8700_CMP_Y_MSB = 59,
    FXOS8700_CMP_Y_LSB = 60,
    FXOS8700_CMP_Z_MSB = 61,
    FXOS8700_CMP_Z_LSB = 62,
    FXOS8700_M_OFF_X_MSB = 63,
    FXOS8700_M_OFF_X_LSB = 64,
    FXOS8700_M_OFF_Y_MSB = 65,
    FXOS8700_M_OFF_Y_LSB = 66,
    FXOS8700_M_OFF_Z_MSB = 67,
    FXOS8700_M_OFF_Z_LSB = 68,
    FXOS8700_MAX_X_MSB = 69,
    FXOS8700_MAX_X_LSB = 70,
    FXOS8700_MAX_Y_MSB = 71,
    FXOS8700_MAX_Y_LSB = 72,
    FXOS8700_MAX_Z_MSB = 73,
    FXOS8700_MAX_Z_LSB = 74,
    FXOS8700_MIN_X_MSB = 75,
    FXOS8700_MIN_X_LSB = 76,
    FXOS8700_MIN_Y_MSB = 77,
    FXOS8700_MIN_Y_LSB = 78,
    FXOS8700_MIN_Z_MSB = 79,
    FXOS8700_MIN_Z_LSB = 80,
    FXOS8700_TEMP = 81,
    FXOS8700_M_THS_CFG = 82,
    FXOS8700_M_THS_SRC = 83,
    FXOS8700_M_THS_X_MSB = 84,
    FXOS8700_M_THS_X_LSB = 85,
    FXOS8700_M_THS_Y_MSB = 86,
    FXOS8700_M_THS_Y_LSB = 87,
    FXOS8700_M_THS_Z_MSB = 88,
    FXOS8700_M_THS_Z_LSB = 89,
    FXOS8700_M_THS_COUNT = 90,
    FXOS8700_M_CTRL_REG1 = 91,
    FXOS8700_M_CTRL_REG2 = 92,
    FXOS8700_M_CTRL_REG3 = 93,
    FXOS8700_M_INT_SRC = 94,
    FXOS8700_A_VECM_CFG = 95,
    FXOS8700_A_VECM_THS_MSB = 96,
    FXOS8700_A_VECM_THS_LSB = 97,
    FXOS8700_A_VECM_CNT = 98,
    FXOS8700_A_VECM_INITX_MSB = 99,
    FXOS8700_A_VECM_INITX_LSB = 100,
    FXOS8700_A_VECM_INITY_MSB = 101,
    FXOS8700_A_VECM_INITY_LSB = 102,
    FXOS8700_A_VECM_INITZ_MSB = 103,
    FXOS8700_A_VECM_INITZ_LSB = 104,
    FXOS8700_M_VECM_CFG = 105,
    FXOS8700_M_VECM_THS_MSB = 106,
    FXOS8700_M_VECM_THS_LSB = 107,
    FXOS8700_M_VECM_CNT = 108,
    FXOS8700_M_VECM_INITX_MSB = 109,
    FXOS8700_M_VECM_INITX_LSB = 110,
    FXOS8700_M_VECM_INITY_MSB = 111,
    FXOS8700_M_VECM_INITY_LSB = 112,
    FXOS8700_M_VECM_INITZ_MSB = 113,
    FXOS8700_M_VECM_INITZ_LSB = 114,
    FXOS8700_A_FFMT_THS_X_MSB = 115,
    FXOS8700_A_FFMT_THS_X_LSB = 116,
    FXOS8700_A_FFMT_THS_Y_MSB = 117,
    FXOS8700_A_FFMT_THS_Y_LSB = 118,
    FXOS8700_A_FFMT_THS_Z_MSB = 119,
    FXOS8700_A_FFMT_THS_Z_LSB = 120,
    FXOS8700_WHOAMI_VAL = 199,
    // /yotta_modules/microbit-dal/inc/drivers/LSM303Accelerometer.h
    LSM303_A_DEFAULT_ADDR = 50,
    LSM303_STATUS_REG_AUX_A = 7,
    LSM303_OUT_TEMP_L_A = 12,
    LSM303_OUT_TEMP_H_A = 13,
    LSM303_INT_COUNTER_REG_A = 14,
    LSM303_WHO_AM_I_A = 15,
    LSM303_TEMP_CFG_REG_A = 31,
    LSM303_CTRL_REG1_A = 32,
    LSM303_CTRL_REG2_A = 33,
    LSM303_CTRL_REG3_A = 34,
    LSM303_CTRL_REG4_A = 35,
    LSM303_CTRL_REG5_A = 36,
    LSM303_CTRL_REG6_A = 37,
    LSM303_DATACAPTURE_A = 38,
    LSM303_STATUS_REG_A = 39,
    LSM303_OUT_X_L_A = 40,
    LSM303_OUT_X_H_A = 41,
    LSM303_OUT_Y_L_A = 42,
    LSM303_OUT_Y_H_A = 43,
    LSM303_OUT_Z_L_A = 44,
    LSM303_OUT_Z_H_A = 45,
    LSM303_FIFO_CTRL_REG_A = 46,
    LSM303_FIFO_SRC_REG_A = 47,
    LSM303_INT1_CFG_A = 48,
    LSM303_INT1_SRC_A = 49,
    LSM303_INT1_THS_A = 50,
    LSM303_INT1_DURATION_A = 51,
    LSM303_INT2_CFG_A = 52,
    LSM303_INT2_SRC_A = 53,
    LSM303_INT2_THS_A = 54,
    LSM303_INT2_DURATION_A = 55,
    LSM303_CLICK_CFG_A = 56,
    LSM303_CLICK_SRC_A = 57,
    LSM303_CLICK_THS_A = 58,
    LSM303_TIME_LIMIT_A = 59,
    LSM303_TIME_LATENCY_A = 60,
    LSM303_TIME_WINDOW_A = 61,
    LSM303_ACT_THS_A = 62,
    LSM303_ACT_DUR_A = 63,
    LSM303_A_WHOAMI_VAL = 51,
    // /yotta_modules/microbit-dal/inc/drivers/LSM303Magnetometer.h
    LSM303_M_WHOAMI_VAL = 64,
    LSM303_M_DEFAULT_ADDR = 60,
    LSM303_OFFSET_X_REG_L_M = 69,
    LSM303_OFFSET_X_REG_H_M = 70,
    LSM303_OFFSET_Y_REG_L_M = 71,
    LSM303_OFFSET_Y_REG_H_M = 72,
    LSM303_OFFSET_Z_REG_L_M = 73,
    LSM303_OFFSET_Z_REG_H_M = 74,
    LSM303_WHO_AM_I_M = 79,
    LSM303_CFG_REG_A_M = 96,
    LSM303_CFG_REG_B_M = 97,
    LSM303_CFG_REG_C_M = 98,
    LSM303_INT_CRTL_REG_M = 99,
    LSM303_INT_SOURCE_REG_M = 100,
    LSM303_INT_THS_L_REG_M = 101,
    LSM303_INT_THS_H_REG_M = 102,
    LSM303_STATUS_REG_M = 103,
    LSM303_OUTX_L_REG_M = 104,
    LSM303_OUTX_H_REG_M = 105,
    LSM303_OUTY_L_REG_M = 106,
    LSM303_OUTY_H_REG_M = 107,
    LSM303_OUTZ_L_REG_M = 108,
    LSM303_OUTZ_H_REG_M = 109,
    // /yotta_modules/microbit-dal/inc/drivers/MAG3110.h
    MAG3110_WHOAMI_VAL = 196,
    MAG3110_DEFAULT_ADDR = 29,
    MAG_DR_STATUS = 0,
    MAG_OUT_X_MSB = 1,
    MAG_OUT_X_LSB = 2,
    MAG_OUT_Y_MSB = 3,
    MAG_OUT_Y_LSB = 4,
    MAG_OUT_Z_MSB = 5,
    MAG_OUT_Z_LSB = 6,
    MAG_WHOAMI = 7,
    MAG_SYSMOD = 8,
    MAG_OFF_X_MSB = 9,
    MAG_OFF_X_LSB = 10,
    MAG_OFF_Y_MSB = 11,
    MAG_OFF_Y_LSB = 12,
    MAG_OFF_Z_MSB = 13,
    MAG_OFF_Z_LSB = 14,
    MAG_DIE_TEMP = 15,
    MAG_CTRL_REG1 = 16,
    MAG_CTRL_REG2 = 17,
    // /yotta_modules/microbit-dal/inc/drivers/MMA8653.h
    MMA8653_DEFAULT_ADDR = 58,
    MMA8653_STATUS = 0,
    MMA8653_OUT_X_MSB = 1,
    MMA8653_WHOAMI = 13,
    MMA8653_XYZ_DATA_CFG = 14,
    MMA8653_CTRL_REG1 = 42,
    MMA8653_CTRL_REG2 = 43,
    MMA8653_CTRL_REG3 = 44,
    MMA8653_CTRL_REG4 = 45,
    MMA8653_CTRL_REG5 = 46,
    MMA8653_WHOAMI_VAL = 90,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitAccelerometer.h
    MICROBIT_ACCELEROMETER_IMU_DATA_VALID = 2,
    MICROBIT_ACCEL_ADDED_TO_IDLE = 4,
    MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE = 1,
    MICROBIT_ACCELEROMETER_EVT_NONE = 0,
    MICROBIT_ACCELEROMETER_EVT_TILT_UP = 1,
    MICROBIT_ACCELEROMETER_EVT_TILT_DOWN = 2,
    MICROBIT_ACCELEROMETER_EVT_TILT_LEFT = 3,
    MICROBIT_ACCELEROMETER_EVT_TILT_RIGHT = 4,
    MICROBIT_ACCELEROMETER_EVT_FACE_UP = 5,
    MICROBIT_ACCELEROMETER_EVT_FACE_DOWN = 6,
    MICROBIT_ACCELEROMETER_EVT_FREEFALL = 7,
    MICROBIT_ACCELEROMETER_EVT_3G = 8,
    MICROBIT_ACCELEROMETER_EVT_6G = 9,
    MICROBIT_ACCELEROMETER_EVT_8G = 10,
    MICROBIT_ACCELEROMETER_EVT_SHAKE = 11,
    MICROBIT_ACCELEROMETER_REST_TOLERANCE = 200,
    MICROBIT_ACCELEROMETER_TILT_TOLERANCE = 200,
    MICROBIT_ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    MICROBIT_ACCELEROMETER_SHAKE_TOLERANCE = 400,
    MICROBIT_ACCELEROMETER_3G_TOLERANCE = 3072,
    MICROBIT_ACCELEROMETER_6G_TOLERANCE = 6144,
    MICROBIT_ACCELEROMETER_8G_TOLERANCE = 8192,
    MICROBIT_ACCELEROMETER_GESTURE_DAMPING = 5,
    MICROBIT_ACCELEROMETER_SHAKE_DAMPING = 10,
    MICROBIT_ACCELEROMETER_SHAKE_RTX = 30,
    MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitButton.h
    MICROBIT_BUTTON_EVT_DOWN = 1,
    MICROBIT_BUTTON_EVT_UP = 2,
    MICROBIT_BUTTON_EVT_CLICK = 3,
    MICROBIT_BUTTON_EVT_LONG_CLICK = 4,
    MICROBIT_BUTTON_EVT_HOLD = 5,
    MICROBIT_BUTTON_EVT_DOUBLE_CLICK = 6,
    MICROBIT_BUTTON_LONG_CLICK_TIME = 1000,
    MICROBIT_BUTTON_HOLD_TIME = 1500,
    MICROBIT_BUTTON_STATE = 1,
    MICROBIT_BUTTON_STATE_HOLD_TRIGGERED = 2,
    MICROBIT_BUTTON_STATE_CLICK = 4,
    MICROBIT_BUTTON_STATE_LONG_CLICK = 8,
    MICROBIT_BUTTON_SIGMA_MIN = 0,
    MICROBIT_BUTTON_SIGMA_MAX = 12,
    MICROBIT_BUTTON_SIGMA_THRESH_HI = 8,
    MICROBIT_BUTTON_SIGMA_THRESH_LO = 2,
    MICROBIT_BUTTON_DOUBLE_CLICK_THRESH = 50,
    MICROBIT_BUTTON_SIMPLE_EVENTS = 0,
    MICROBIT_BUTTON_ALL_EVENTS = 1,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitCompass.h
    MICROBIT_COMPASS_STATUS_RUNNING = 1,
    MICROBIT_COMPASS_STATUS_CALIBRATED = 2,
    MICROBIT_COMPASS_STATUS_CALIBRATING = 4,
    MICROBIT_COMPASS_STATUS_ADDED_TO_IDLE = 8,
    MICROBIT_COMPASS_EVT_DATA_UPDATE = 1,
    MICROBIT_COMPASS_EVT_CONFIG_NEEDED = 2,
    MICROBIT_COMPASS_EVT_CALIBRATE = 3,
    MICROBIT_COMPASS_EVT_CALIBRATION_NEEDED = 4,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitDisplay.h
    MICROBIT_DISPLAY_EVT_ANIMATION_COMPLETE = 1,
    MICROBIT_DISPLAY_EVT_LIGHT_SENSE = 2,
    MICROBIT_DISPLAY_DEFAULT_AUTOCLEAR = 1,
    MICROBIT_DISPLAY_SPACING = 1,
    MICROBIT_DISPLAY_GREYSCALE_BIT_DEPTH = 8,
    MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS = -255,
    ANIMATION_MODE_NONE = 0,
    ANIMATION_MODE_STOPPED = 1,
    ANIMATION_MODE_SCROLL_TEXT = 2,
    ANIMATION_MODE_PRINT_TEXT = 3,
    ANIMATION_MODE_SCROLL_IMAGE = 4,
    ANIMATION_MODE_ANIMATE_IMAGE = 5,
    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,
    ANIMATION_MODE_PRINT_CHARACTER = 7,
    DISPLAY_MODE_BLACK_AND_WHITE = 0,
    DISPLAY_MODE_GREYSCALE = 1,
    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,
    MICROBIT_DISPLAY_ROTATION_0 = 0,
    MICROBIT_DISPLAY_ROTATION_90 = 1,
    MICROBIT_DISPLAY_ROTATION_180 = 2,
    MICROBIT_DISPLAY_ROTATION_270 = 3,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitFile.h
    READ = 1,
    WRITE = 2,
    READ_AND_WRITE = 3,
    CREATE = 4,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitFileSystem.h
    MBFS_FILENAME_LENGTH = 16,
    MB_READ = 1,
    MB_WRITE = 2,
    MB_CREAT = 4,
    MB_APPEND = 8,
    MB_SEEK_SET = 1,
    MB_SEEK_END = 2,
    MB_SEEK_CUR = 4,
    MBFS_STATUS_INITIALISED = 1,
    MBFS_UNUSED = 65535,
    MBFS_EOF = 61439,
    MBFS_DELETED = 0,
    MBFS_DIRECTORY_ENTRY_FREE = 32768,
    MBFS_DIRECTORY_ENTRY_VALID = 16384,
    MBFS_DIRECTORY_ENTRY_DIRECTORY = 8192,
    MBFS_DIRECTORY_ENTRY_NEW = 65535,
    MBFS_DIRECTORY_ENTRY_DELETED = 0,
    MBFS_BLOCK_TYPE_FILE = 1,
    MBFS_BLOCK_TYPE_DIRECTORY = 2,
    MBFS_BLOCK_TYPE_FILETABLE = 3,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitFlash.h
    PAGE_SIZE = 1024,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitI2C.h
    MICROBIT_I2C_MAX_RETRIES = 9,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitLightSensor.h
    MICROBIT_LIGHT_SENSOR_CHAN_NUM = 3,
    MICROBIT_LIGHT_SENSOR_AN_SET_TIME = 4000,
    MICROBIT_LIGHT_SENSOR_TICK_PERIOD = 5,
    MICROBIT_LIGHT_SENSOR_MAX_VALUE = 338,
    MICROBIT_LIGHT_SENSOR_MIN_VALUE = 75,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitMatrixMaps.h
    NO_CONN = 0,
    MICROBIT_DISPLAY_WIDTH = 5,
    MICROBIT_DISPLAY_HEIGHT = 5,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitMemoryMap.h
    NUMBER_OF_REGIONS = 3,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitMessageBus.h
    MESSAGE_BUS_CONCURRENT_LISTENERS = 0,
    MESSAGE_BUS_CONCURRENT_EVENTS = 1,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitMultiButton.h
    MICROBIT_MULTI_BUTTON_STATE_1 = 1,
    MICROBIT_MULTI_BUTTON_STATE_2 = 2,
    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_1 = 4,
    MICROBIT_MULTI_BUTTON_HOLD_TRIGGERED_2 = 8,
    MICROBIT_MULTI_BUTTON_SUPRESSED_1 = 16,
    MICROBIT_MULTI_BUTTON_SUPRESSED_2 = 32,
    MICROBIT_MULTI_BUTTON_ATTACHED = 64,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitPin.h
    IO_STATUS_DIGITAL_IN = 1,
    IO_STATUS_DIGITAL_OUT = 2,
    IO_STATUS_ANALOG_IN = 4,
    IO_STATUS_ANALOG_OUT = 8,
    IO_STATUS_TOUCH_IN = 16,
    IO_STATUS_EVENT_ON_EDGE = 32,
    IO_STATUS_EVENT_PULSE_ON_EDGE = 64,
    MICROBIT_PIN_MAX_OUTPUT = 1023,
    MICROBIT_PIN_MAX_SERVO_RANGE = 180,
    MICROBIT_PIN_DEFAULT_SERVO_RANGE = 2000,
    MICROBIT_PIN_DEFAULT_SERVO_CENTER = 1500,
    MICROBIT_PIN_EVENT_NONE = 0,
    MICROBIT_PIN_EVENT_ON_EDGE = 1,
    MICROBIT_PIN_EVENT_ON_PULSE = 2,
    MICROBIT_PIN_EVENT_ON_TOUCH = 3,
    MICROBIT_PIN_EVT_RISE = 2,
    MICROBIT_PIN_EVT_FALL = 3,
    MICROBIT_PIN_EVT_PULSE_HI = 4,
    MICROBIT_PIN_EVT_PULSE_LO = 5,
    PIN_CAPABILITY_DIGITAL_IN = 1,
    PIN_CAPABILITY_DIGITAL_OUT = 2,
    PIN_CAPABILITY_DIGITAL = 3,
    PIN_CAPABILITY_ANALOG_IN = 4,
    PIN_CAPABILITY_ANALOG_OUT = 8,
    PIN_CAPABILITY_ANALOG = 12,
    PIN_CAPABILITY_STANDARD = 11,
    PIN_CAPABILITY_ALL = 15,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitQuadratureDecoder.h
    QDEC_USE_SYSTEM_TICK = 1,
    QDEC_USE_DEBOUNCE = 2,
    QDEC_LED_ACTIVE_LOW = 4,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitRadio.h
    MICROBIT_RADIO_STATUS_INITIALISED = 1,
    MICROBIT_RADIO_BASE_ADDRESS = 1969383796,
    MICROBIT_RADIO_DEFAULT_GROUP = 0,
    MICROBIT_RADIO_DEFAULT_TX_POWER = 6,
    MICROBIT_RADIO_MAX_PACKET_SIZE = 32,
    MICROBIT_RADIO_HEADER_SIZE = 4,
    MICROBIT_RADIO_MAXIMUM_RX_BUFFERS = 4,
    MICROBIT_RADIO_PROTOCOL_DATAGRAM = 1,
    MICROBIT_RADIO_PROTOCOL_EVENTBUS = 2,
    MICROBIT_RADIO_EVT_DATAGRAM = 1,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitSerial.h
    MICROBIT_SERIAL_DEFAULT_BAUD_RATE = 115200,
    MICROBIT_SERIAL_DEFAULT_BUFFER_SIZE = 20,
    MICROBIT_SERIAL_EVT_DELIM_MATCH = 1,
    MICROBIT_SERIAL_EVT_HEAD_MATCH = 2,
    MICROBIT_SERIAL_EVT_RX_FULL = 3,
    MICROBIT_SERIAL_RX_IN_USE = 1,
    MICROBIT_SERIAL_TX_IN_USE = 2,
    MICROBIT_SERIAL_RX_BUFF_INIT = 4,
    MICROBIT_SERIAL_TX_BUFF_INIT = 8,
    ASYNC = 0,
    SYNC_SPINWAIT = 1,
    SYNC_SLEEP = 2,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitStorage.h
    MICROBIT_STORAGE_MAGIC = 51966,
    MICROBIT_STORAGE_BLOCK_SIZE = 48,
    MICROBIT_STORAGE_KEY_SIZE = 16,
    MICROBIT_STORAGE_STORE_PAGE_OFFSET = 17,
    MICROBIT_STORAGE_SCRATCH_PAGE_OFFSET = 19,
    // /yotta_modules/microbit-dal/inc/drivers/MicroBitThermometer.h
    MICROBIT_THERMOMETER_PERIOD = 1000,
    MAG3110_SAMPLE_RATES = 11,
    MICROBIT_THERMOMETER_EVT_UPDATE = 1,
    MICROBIT_THERMOMETER_ADDED_TO_IDLE = 2,
    // /yotta_modules/microbit-dal/inc/types/CoordinateSystem.h
    COORDINATE_SPACE_ROTATED_0 = 0,
    COORDINATE_SPACE_ROTATED_90 = 1,
    COORDINATE_SPACE_ROTATED_180 = 2,
    COORDINATE_SPACE_ROTATED_270 = 3,
    RAW = 0,
    SIMPLE_CARTESIAN = 1,
    NORTH_EAST_DOWN = 2,
    EAST_NORTH_UP = 3,
    // /yotta_modules/microbit-dal/inc/types/MicroBitEvent.h
    MICROBIT_ID_ANY = 0,
    MICROBIT_EVT_ANY = 0,
    CREATE_ONLY = 0,
    CREATE_AND_FIRE = 1,
    MICROBIT_EVENT_DEFAULT_LAUNCH_MODE = 1,
}