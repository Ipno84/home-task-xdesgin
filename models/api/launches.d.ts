type Sort =
    | 'flight_id'
    | 'start'
    | 'end'
    | 'flight_number'
    | 'launch_year'
    | 'launch_date_utc'
    | 'launch_date_unix'
    | 'launch_date_local'
    | 'tbd'
    | 'rocket_id'
    | 'rocket_name'
    | 'rocket_type'
    | 'core_serial'
    | 'land_success'
    | 'landing_intent'
    | 'landing_type'
    | 'landing_vehicle'
    | 'cap_serial'
    | 'core_flight'
    | 'block'
    | 'gridfins'
    | 'legs'
    | 'core_reuse'
    | 'capsule_reuse'
    | 'fairings_reused'
    | 'fairings_recovery_attempt'
    | 'fairings_recovered'
    | 'fairings_ship'
    | 'site_id'
    | 'site_name'
    | 'payload_id'
    | 'norad_id'
    | 'customer'
    | 'nationality'
    | 'manufacturer'
    | 'payload_type'
    | 'orbit'
    | 'reference_system'
    | 'regime'
    | 'longitude'
    | 'semi_major_axis_km'
    | 'eccentricity'
    | 'periapsis_km'
    | 'apoapsis_km'
    | 'inclination_deg'
    | 'period_min'
    | 'lifespan_years'
    | 'epoch'
    | 'mean_motion'
    | 'raan'
    | 'launch_success';

type Order = 'asc' | 'desc';

declare interface GetLaunchesParams {
    // Optional querystrings
    flight_id?: string;
    start?: string; /// start=2017-06-22&end=2017-06-25
    end?: string; /// start=2017-06-22&end=2017-06-25
    flight_number?: number;
    launch_year?: number;
    launch_date_utc?: string; // 2017-06-23T19:10:000Z
    launch_date_unix?: number; // 2017-06-23T19:10:000Z
    launch_date_local?: string; // 2017-06-23T19:10:000Z
    tbd?: boolean;
    rocket_id?: string;
    rocket_name?: string;
    rocket_type?: string;
    core_serial?: string;
    land_success?: boolean;
    landing_intent?: boolean;
    landing_type?: string;
    landing_vehicle?: string;
    cap_serial?: string;
    core_flight?: number;
    block?: number;
    gridfins?: boolean;
    legs?: boolean;
    core_reuse?: boolean;
    capsule_reuse?: boolean;
    fairings_reused?: boolean;
    fairings_recovery_attempt?: boolean;
    fairings_recovered?: boolean;
    fairings_ship?: string;
    site_id?: string;
    site_name?: string;
    payload_id?: string;
    norad_id?: number;
    customer?: string;
    nationality?: string;
    manufacturer?: string;
    payload_type?: string;
    orbit?: string;
    reference_system?: string;
    regime?: string;
    longitude?: number;
    semi_major_axis_km?: number;
    eccentricity?: number;
    periapsis_km?: number;
    apoapsis_km?: number;
    inclination_deg?: number;
    period_min?: number;
    lifespan_years?: number;
    epoch?: string; // 2018-08-07T06:57:16.000Z
    mean_motion?: number;
    raan?: number;
    launch_success?: boolean;
    // Optional output querystrings
    id?: boolean;
    limit?: number;
    offset?: number;
    sort?: Sort;
    order?: Order;
}
