diagnostic(off, derivative_uniformity);
struct FSIn {
  @builtin(front_facing) sk_Clockwise: bool,
};
struct FSOut {
  @location(0) sk_FragColor: vec4<f32>,
};
struct Test {
  x: i32,
  y: i32,
  z: i32,
};
fn main(_stageOut: ptr<function, FSOut>) {
  {
    var t: Test;
    t.x = 0;
    (*_stageOut).sk_FragColor.x = f32(t.x);
  }
}
@fragment fn fragmentMain(_stageIn: FSIn) -> FSOut {
  var _stageOut: FSOut;
  main(&_stageOut);
  return _stageOut;
}
