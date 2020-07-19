import { Country } from '../../../models'
import React from 'react';

type KpiProps = {
    label: string
    value: number | string
}

export type FourKpiProps = {
    data: {
        firstKpi: KpiProps
        secondKpi: KpiProps
        thirdKpi: KpiProps
        fourthKpi: KpiProps
    }
}

export type FourKpiState = {

}
