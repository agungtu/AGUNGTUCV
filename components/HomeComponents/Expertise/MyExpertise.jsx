import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { Card } from "antd";

const MyExpertise = () => {
  const { isLoading, error, data } = useQuery("expertise", () =>
    axios
      .get("api/expertise")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My profile
      </div>
      <Card
        className="rounded-xl col-sm-6 card"
        style={{ backgroundColor: "greenyellow", padding: "20px" }}
      >
        <span className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <span className="w-full md:w-1/3 px-2">Nama</span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b>Agung Tri Utomo</b>
          </span>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <span className="w-full md:w-1/3 px-2">Umur</span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b>25 Tahun</b>
          </span>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <span className="w-full md:w-1/3 px-2">Alamat</span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b>Jl. Srikandi I/9 RT 03 RW 04 Kota Salatiga</b>
          </span>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <span className="w-full md:w-1/3 px-2">Pendidikan</span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b>S2 Digital Transformation Intelligence (AMIKOM)</b>
          </span>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center mb-2">
          <span className="w-full md:w-1/3 px-2"></span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b>S1 Teknik Informatika (UKSW)</b>
          </span>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center">
          <span className="w-full md:w-1/3 px-2">Pengalaman</span>
          <span className="w-full md:w-2/3 px-2 mt-2">
            <b> 3+ Tahun (Programmer)</b>
          </span>
        </span>
      </Card>

      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
        My Expertise
      </div>
      <div
        className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 py-8 my-8 rounded-xl"
        style={{ backgroundColor: "greenyellow" }}
      >
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map(() => (
              <ParagraphSkeleton className={"space-y-2 p-8"} />
            ))
          : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)}
      </div>
    </>
  );
};

export default MyExpertise;
