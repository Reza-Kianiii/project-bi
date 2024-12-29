import { Header } from '@bi/header';
import { Box } from '@mui/material';

import {
  DataGridPremium,
  GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Widget } from '@bi/widget';
import { useGetBankBalanceQuery } from './accounting-bank-operations-balance.slice';

const visibleFields = [
  'commodity',
  'quantity',
  'filledQuantity',
  'status',
  'isFilled',
  'unitPrice',
  'unitPriceCurrency',
  'subTotal',
  'feeRate',
  'feeAmount',
  'incoTerm',
];

export function AccountingBankOperationsBalance() {
  const {
    data: dataBankBalance,
    isLoading,
    isFetching,
  } = useGetBankBalanceQuery();

  console.log('render');

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: true,
    visibleFields,
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,

      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ['commodity'],
      },
      sorting: {
        sortModel: [
          { field: GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD, sort: 'asc' },
        ],
      },

      aggregation: {
        model: {
          quantity: 'sum',
        },
      },
    },
  });

  return (
    <Widget>
      <Header />
      <Box>
        <DataGridPremium
          {...data}
          apiRef={apiRef}
          loading={loading}
          disableRowSelectionOnClick
          initialState={initialState}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Widget>
  );
}

export default AccountingBankOperationsBalance;
