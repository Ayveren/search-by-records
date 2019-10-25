import React from 'react';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';
import { STATUSES } from "../../tools/constants";

export default function StatisticBar({ records }){
  return (
    <Card>
      <CardHeader
        title="Statistics"
      />
      <CardContent>
        {STATUSES.map(i => {
          return (
            <Typography key={i+Math.random()} color="textSecondary">
              {`${i}: ${records.filter((r) => r.status === i).length}`}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
}