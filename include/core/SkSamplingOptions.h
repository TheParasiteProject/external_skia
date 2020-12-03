/*
 * Copyright 2020 Google Inc.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

#ifndef SkImageSampling_DEFINED
#define SkImageSampling_DEFINED

#include "include/core/SkFilterQuality.h"

enum class SkFilterMode {
    kNearest,   // single sample point (nearest neighbor)
    kLinear,    // interporate between 2x2 sample points (bilinear interpolation)
};

enum class SkMipmapMode {
    kNone,      // ignore mipmap levels, sample from the "base"
    kNearest,   // sample from the nearest level
    kLinear,    // interpolate between the two nearest levels
};

/*
 *  Specify B and C (each between 0...1) to create a shader that applies the corresponding
 *  cubic reconstruction filter to the image.
 *
 *  Example values:
 *      B = 1/3, C = 1/3        "Mitchell" filter
 *      B = 0,   C = 1/2        "Catmull-Rom" filter
 *
 *  See "Reconstruction Filters in Computer Graphics"
 *          Don P. Mitchell
 *          Arun N. Netravali
 *          1988
 *  https://www.cs.utexas.edu/~fussell/courses/cs384g-fall2013/lectures/mitchell/Mitchell.pdf
 *
 *  Desmos worksheet https://www.desmos.com/calculator/aghdpicrvr
 *  Nice overview https://entropymine.com/imageworsener/bicubic/
 */
struct SkCubicResampler {
    float B, C;
};

struct SK_API SkSamplingOptions {
    const bool             useCubic = false;
    const SkCubicResampler cubic    = {0, 0};
    const SkFilterMode     filter   = SkFilterMode::kNearest;
    const SkMipmapMode     mipmap   = SkMipmapMode::kNone;

    SkSamplingOptions() = default;
    SkSamplingOptions(const SkSamplingOptions&) = default;
    SkSamplingOptions& operator=(const SkSamplingOptions& that) {
        this->~SkSamplingOptions();   // A pedantic no-op.
        new (this) SkSamplingOptions(that);
        return *this;
    }

    SkSamplingOptions(SkFilterMode fm, SkMipmapMode mm)
        : useCubic(false)
        , filter(fm)
        , mipmap(mm) {}

    explicit SkSamplingOptions(const SkCubicResampler& c)
        : useCubic(true)
        , cubic(c) {}

    explicit SkSamplingOptions(SkFilterQuality);
};

#endif
