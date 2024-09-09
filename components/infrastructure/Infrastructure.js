import { Stack } from "@mui/material";
import { InfrastructureItem } from "./InfrastructureItem";
import { InfrastructureItem1 } from "./InfrastructureItem1";
import InfrastructureItem2 from "./InfrastructureItem2";
import InfrastructureItem3 from "./InfrastructureItem3";
import InfrastructureItem4 from "./InfrastructureItem4";

export const Infrastructure = () => {
  return (
    <>
      <Stack direction={"column"}>
        <InfrastructureItem4 />
        <InfrastructureItem3 />
        <InfrastructureItem2 />
        <InfrastructureItem1 />
        <InfrastructureItem />
      </Stack>
    </>
  );
};
