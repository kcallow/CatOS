for (let i = 0; i < 4; i++) {
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
}
basic.forever(() => {
    basic.showString("Hello!")
})
