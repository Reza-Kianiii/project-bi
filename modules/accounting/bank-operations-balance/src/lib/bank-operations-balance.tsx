import styled from 'tailwind';

const StyledBankOperationsBalance = styled.div`
  color: pink;
`;
export function BankOperationsBalance() {

  const {
    data: dataBankBalance,
    isLoading,
    isFetching,
  } = useGetBankBalanceQuery();

  console.log(dataBankBalance, 'dataBankBalance');

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

export default BankOperationsBalance;
