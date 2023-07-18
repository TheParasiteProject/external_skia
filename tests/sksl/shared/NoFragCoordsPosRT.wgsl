diagnostic(off, derivative_uniformity);
struct VSIn {
  @location(0) pos: vec4<f32>,
};
struct VSOut {
  @builtin(position) sk_Position: vec4<f32>,
};
/* unsupported */ var<private> sk_PointSize: f32;
struct _GlobalUniforms {
  sk_RTAdjust: vec4<f32>,
};
@binding(0) @group(0) var<uniform> _globalUniforms: _GlobalUniforms;
fn main(_stageIn: VSIn, _stageOut: ptr<function, VSOut>) {
  {
    (*_stageOut).sk_Position = _stageIn.pos;
    (*_stageOut).sk_Position = vec4<f32>((*_stageOut).sk_Position.xy * _globalUniforms.sk_RTAdjust.xz + (*_stageOut).sk_Position.ww * _globalUniforms.sk_RTAdjust.yw, 0.0, (*_stageOut).sk_Position.w);
  }
}
@vertex fn vertexMain(_stageIn: VSIn) -> VSOut {
  var _stageOut: VSOut;
  main(_stageIn, &_stageOut);
  return _stageOut;
}
