uniform sampler2D   u_scene;
uniform sampler2D   u_doubleBuffer0;

uniform vec2        u_resolution;
uniform float       u_time;
uniform int         u_frame;

varying vec2        v_texcoord;
varying vec3        v_normal;
varying vec4        v_position;

#include "lygia/math/saturate.glsl"
#include "lygia/space/ratio.glsl"
#include "lygia/space/scale.glsl"
#include "lygia/color/mixOklab.glsl"
#include "lygia/generative/snoise.glsl"

void main() {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = 1.0 / u_resolution;
    vec2 st = gl_FragCoord.xy * pixel;
    vec2 sst = ratio(st, u_resolution); 
    vec2 uv = v_texcoord;


#if defined(BACKGROUND)
    color.a = 0.0;

#elif defined(DOUBLE_BUFFER_0)
    float n = snoise( vec3(sst * (1.5 + sin(u_time)) * 5.0, u_time * 0.5) ) * 0.0025;
    vec2 st0 = scale(st, 0.995 + n);
    color = texture2D(u_doubleBuffer0, st0);

    vec4 scene = texture2D(u_scene, st);
    color.rgb = mixOklab(color.rgb, scene.rgb, step(0.99,scene.a));
    color.a = 1.0;

#elif defined(POSTPROCESSING)
    color = texture2D(u_doubleBuffer0, st);

#else
    color.rgb = v_normal * 0.5 + 0.5;
    color.rg = mix(color.rg, uv, saturate(distance(sst, vec2(0.5))*2. ) );

#endif

    gl_FragColor = color;
}