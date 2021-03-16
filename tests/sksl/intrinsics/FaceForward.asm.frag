OpCapability Shader
%1 = OpExtInstImport "GLSL.std.450"
OpMemoryModel Logical GLSL450
OpEntryPoint Fragment %main "main" %sk_FragColor %sk_Clockwise
OpExecutionMode %main OriginUpperLeft
OpName %sk_FragColor "sk_FragColor"
OpName %sk_Clockwise "sk_Clockwise"
OpName %_UniformBuffer "_UniformBuffer"
OpMemberName %_UniformBuffer 0 "a"
OpMemberName %_UniformBuffer 1 "b"
OpMemberName %_UniformBuffer 2 "c"
OpMemberName %_UniformBuffer 3 "d"
OpMemberName %_UniformBuffer 4 "e"
OpMemberName %_UniformBuffer 5 "f"
OpName %main "main"
OpDecorate %sk_FragColor RelaxedPrecision
OpDecorate %sk_FragColor Location 0
OpDecorate %sk_FragColor Index 0
OpDecorate %sk_Clockwise RelaxedPrecision
OpDecorate %sk_Clockwise BuiltIn FrontFacing
OpMemberDecorate %_UniformBuffer 0 Offset 0
OpMemberDecorate %_UniformBuffer 0 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 1 Offset 4
OpMemberDecorate %_UniformBuffer 1 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 2 Offset 8
OpMemberDecorate %_UniformBuffer 2 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 3 Offset 16
OpMemberDecorate %_UniformBuffer 3 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 4 Offset 32
OpMemberDecorate %_UniformBuffer 4 RelaxedPrecision
OpMemberDecorate %_UniformBuffer 5 Offset 48
OpMemberDecorate %_UniformBuffer 5 RelaxedPrecision
OpDecorate %_UniformBuffer Block
OpDecorate %10 Binding 0
OpDecorate %10 DescriptorSet 0
OpDecorate %21 RelaxedPrecision
OpDecorate %24 RelaxedPrecision
OpDecorate %27 RelaxedPrecision
OpDecorate %34 RelaxedPrecision
OpDecorate %37 RelaxedPrecision
OpDecorate %40 RelaxedPrecision
%float = OpTypeFloat 32
%v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output
%bool = OpTypeBool
%_ptr_Input_bool = OpTypePointer Input %bool
%sk_Clockwise = OpVariable %_ptr_Input_bool Input
%_UniformBuffer = OpTypeStruct %float %float %float %v4float %v4float %v4float
%_ptr_Uniform__UniformBuffer = OpTypePointer Uniform %_UniformBuffer
%10 = OpVariable %_ptr_Uniform__UniformBuffer Uniform
%void = OpTypeVoid
%14 = OpTypeFunction %void
%_ptr_Uniform_float = OpTypePointer Uniform %float
%int = OpTypeInt 32 1
%int_0 = OpConstant %int 0
%int_1 = OpConstant %int 1
%int_2 = OpConstant %int 2
%_ptr_Output_float = OpTypePointer Output %float
%_ptr_Uniform_v4float = OpTypePointer Uniform %v4float
%int_3 = OpConstant %int 3
%int_4 = OpConstant %int 4
%int_5 = OpConstant %int 5
%main = OpFunction %void None %14
%15 = OpLabel
%17 = OpAccessChain %_ptr_Uniform_float %10 %int_0
%21 = OpLoad %float %17
%22 = OpAccessChain %_ptr_Uniform_float %10 %int_1
%24 = OpLoad %float %22
%25 = OpAccessChain %_ptr_Uniform_float %10 %int_2
%27 = OpLoad %float %25
%16 = OpExtInst %float %1 FaceForward %21 %24 %27
%28 = OpAccessChain %_ptr_Output_float %sk_FragColor %int_0
OpStore %28 %16
%31 = OpAccessChain %_ptr_Uniform_v4float %10 %int_3
%34 = OpLoad %v4float %31
%35 = OpAccessChain %_ptr_Uniform_v4float %10 %int_4
%37 = OpLoad %v4float %35
%38 = OpAccessChain %_ptr_Uniform_v4float %10 %int_5
%40 = OpLoad %v4float %38
%30 = OpExtInst %v4float %1 FaceForward %34 %37 %40
OpStore %sk_FragColor %30
OpReturn
OpFunctionEnd
